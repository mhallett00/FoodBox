import React, { useState, useEffect } from "react";
import Cooks2 from "./Cooks2";
import Table from "react-bootstrap/Table";

import Map from "./Map";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SearchCook2(props) {
  const { userData, setSelectedCook } = props;

  const [cooks, setCooks] = useState();

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/users/")
      .then((res) => {
        setCooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cooksInArea = cooks
    ? cooks.map((cook, index) => {
        if (cook.email != userData.email)
          return (
            <Cooks2
              key={index}
              cook_fn={cook.first_name}
              cook_ln={cook.last_name}
              cook_email={cook.email}
              uid={cook.id}
              onSelect={() => {
                setSelectedCook({
                  id: cook.id,
                  cook_fn: cook.first_name,
                  cook_ln: cook.last_name,
                });
                console.log(cook);
                history.push("/seller_menu/order");
              }}
            />
          );
      })
    : "No cooks available!";

  const sellerPostCodes = cooks
    ? cooks.map((cook) => {
        if (cook.is_seller) {
          return cook.seller_postcode;
        }
      })
    : [];

  return (
    <>
      <div style={{ width: "50vw", height: "50vh" }}>
        <Map
          sellerPostCodes={sellerPostCodes}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        ></Map>
      </div>
      <h2>SearchCook</h2>
      <section className="cooks">
        <h4 className="cooks__header text--light">Cooks near me</h4>
        <ol className="cooks__list"></ol>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Location</th>
              <th colSpan="2">Name</th>
              {/* <th>Menu Items</th> */}
            </tr>
          </thead>
          <tbody>{cooksInArea}</tbody>
        </Table>
      </section>
    </>
  );
}

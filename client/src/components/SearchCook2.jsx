import React, { useState, useEffect } from "react";
import Cooks2 from "./Cooks2";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Map from "./Map";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SearchCook2(props) {
  const { userData, setSelectedCook, selectedCook, cartItems } = props;

  const [cooks, setCooks] = useState();

  const history = useHistory();

  

  useEffect(() => {
    if (cartItems.length) {
      history.push("/seller_menu/order");
    }
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
                history.push("/seller_menu/order");
              }}
            />
          );
      })
    : "No cooks available!";

  const sellers = cooks
    ? cooks.map((cook) => {
        if (cook.is_seller) {
          return cook;
        }
      })
    : [];

  return (
    <div className="search-cook">
      <Row className="search-cook map" style={{ width: "100vw", height: "90vh" }}>
        <Col md={8}>
        <Map
          sellers={sellers}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        ></Map>
        </Col>
        <Col md={4} className="search-cook results">
          <section className="cooks">
            <h2>Search for Cooks</h2>
            <h4 className="cooks__header text--light">Cooks near me</h4>
            <hr/>
            <Table borderless hover>
              <thead>
                <tr>
                  <th>Location</th>
                  <th colSpan="2">Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cooksInArea}
              </tbody>
            </Table>
          </section>
        </Col>
      </Row>
    </div>
  );
}

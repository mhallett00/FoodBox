import React, { useState, useEffect } from "react";
import Cooks2 from "./Cooks2";
import Table from 'react-bootstrap/Table';

import Map from "./Map";
import MapWindow from "./Map";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


export default function SearchCook2(props) {

  const { userData, setSelectedCook } = props;

  const [cooks, setCooks ] = useState();


  const history = useHistory();

  useEffect(() => {
    axios.get('/api/users/')
    .then((res) => {
      setCooks(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
  }, [])

  const cooksInArea = cooks ? cooks.map((cook, index) =>{
    if (cook.email != userData.email)
    return(
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
          })
          console.log(cook)
          history.push('/seller_menu/order')
        }}


      />
    )

  }) 
  : "No cooks available!"

  return (
  <>
    <Map/>
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
      <tbody>{cooksInArea}
      </tbody>
    </Table>
      </section>
  </>
  );
}
 

 

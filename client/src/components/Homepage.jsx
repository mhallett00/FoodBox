import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDecks from "./CardDecks";
import Main from "./Main";


export default function Homepage(props) {

  const { userData } = props;
  
  return (
  <div>
    <Main userData={userData}/>
    <CardDecks/>
  </div>
  )
}
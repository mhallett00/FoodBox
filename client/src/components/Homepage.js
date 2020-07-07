import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDecks from "./CardDecks";
import Main from "./Main";


export default function Homepage() {
  return (
  <div>
    <Main/>
    <CardDecks/>
  </div>
  )
}
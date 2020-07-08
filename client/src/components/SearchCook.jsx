import React, { Component } from "react";
import Cooks from "./Cooks";
import Map from "./Map";
import MapWindow from "./Map";

export default function CooksList(props) {

  return (
  <>
    <Map/>
    <h2>SearchCook</h2>
      <section className="cooks">
        <h4 className="cooks__header text--light">Cooks near me</h4>
        <ol className="cooks__list"><Cooks/></ol>
      </section>
  </>
  );
}
 

 

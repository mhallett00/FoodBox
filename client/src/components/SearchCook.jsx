import React, { Component } from "react";
import Cooks from "./Cooks";
import Map from "./Map";

export default function SearchCook() {
  return (
    <div className="search-cook-container">
      <div className="search-cook">
        <p>What's available near me?</p>
        <input />
      </div>
      <div style={{ width: "50vw", height: "50vh" }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBs_0ctuC56zLKgVqXHXsnzoX_ImnBeaMM&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        ></Map>
      </div>
    </div>
  );
}

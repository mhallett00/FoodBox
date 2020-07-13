import React from "react";
import "./CardDecks.scss";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function CardDecks() {
  return (
    <div className="card-deck">
    <div className="card">
      <img className="card-img-top" src="../placeholder-images/dd4270dc99cb4b98b438205c43b773aa.jpeg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Your Meals. Our Home Cooks.</h5>
        <p className="card-text">Your meals are created by homecooks who want to share their passion for cooking. Montreal's diverse cultures makes it possible for our home cooks to offer a wide variety of cuisines from all over the world.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="../placeholder-images/528964e0cd944120bd51d60f63715718.jpeg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Home Cooks You Can Trust</h5>
        <p className="card-text">Our home cooks are certified in food handling and preparation to ensure that you enjoy fresh, delicious, and affordable meals at your office.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div className="card">
      <img className="card-img-top" src="../placeholder-images/sharon-chen-L1ZhjK-R6uc-unsplash.jpg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">Your Meal Delivered At Your Office</h5>
        <p className="card-text">Meals are delivered to your office at or prior to your lunchtime so you can enjoy your stress-free and delicious lunch</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
  );

}
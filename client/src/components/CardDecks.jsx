import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function CardDecks() {
  return (
    <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="../placeholder-images/dd4270dc99cb4b98b438205c43b773aa.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="../placeholder-images/528964e0cd944120bd51d60f63715718.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="../placeholder-images/sharon-chen-L1ZhjK-R6uc-unsplash.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
  );

}
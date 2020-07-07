import React from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CardDeck from 'react-bootstrap/CardDeck';


export default function App() {

  axios({
    method: "GET",
    url: "/api",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <Navigation />
      <CardDecks />
      <Cards />
    </div>
  );
}

// function Footer() {
//   return (
//     <h2>Footer<h2 />
//   );
// }

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">F O O D B O X</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Menu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Cards() {
  return (
    <>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="../placeholder_images/dd4270dc99cb4b98b438205c43b773aa.jpeg" />
      <Card.Body>
        <Card.Title>We bring you a taste of home to your office</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="../placeholder_images/dd4270dc99cb4b98b438205c43b773aa.jpeg" />
      <Card.Body>
        <Card.Title>We bring you a taste of home to your office</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="../placeholder_images/dd4270dc99cb4b98b438205c43b773aa.jpeg" />
      <Card.Body>
        <Card.Title>We bring you a taste of home to your office</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

function CardDecks() {
  return (
    <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="../placeholder_images/dd4270dc99cb4b98b438205c43b773aa.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="../placeholder_images/528964e0cd944120bd51d60f63715718.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="..." alt="Card image cap"/>
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



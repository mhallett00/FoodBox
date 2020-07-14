import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.scss"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation(props) {

  const { cartItems, userData } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="header-logo" href="/">F O O D B O X</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search_cook">Order</Nav.Link>
          {userData.is_seller && (
            <>
              <Nav.Link href="/seller_menu">Your Menu</Nav.Link>
              <Nav.Link href="/seller_dashboard">Dashboard</Nav.Link>
            </>
            )}
        </Nav>
        <Nav className="header-login">
          {localStorage.getItem('token') && (
            <>
              {/* <button className="logout-button" onClick={() => logoutUser()}>Logout</button> */}
              <Nav.Link href="/buyer_dashboard">logged in as {userData.email}</Nav.Link>
              <Nav.Link className="react-links" href="/" onClick={props.logout}>Logout</Nav.Link>
            </>
          )}
          {!localStorage.getItem('token') && (
            <>
              <Nav.Link className="react-links" href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          )}
        <Nav className="header-basket"></Nav>
          <Nav.Link href="/cart"><i className="fas fa-shopping-basket">({cartItems.length})</i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
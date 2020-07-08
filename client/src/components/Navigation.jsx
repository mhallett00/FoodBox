import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">F O O D B O X</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
        </Nav>
        <Nav className="header-login">
          {localStorage.getItem('token') && (
            <>
              {/* <button className="logout-button" onClick={() => logoutUser()}>Logout</button> */}
              <Nav.Link className="react-links" href="/">Logout</Nav.Link>
            </>
          )}
          {!localStorage.getItem('token') && (
            <>
              <Nav.Link className="react-links" href="/">Login</Nav.Link>
              <Nav.Link href="/">Register</Nav.Link>
            </>
          )}
        <Nav className="header-basket"></Nav>
          <Nav.Link href="/cart"><i class="fas fa-shopping-basket"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
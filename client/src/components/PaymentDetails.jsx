import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';


export default function PaymentDetails() {
  return (
    <div>
      <h3>Payment Details</h3> 
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="username" placeholder="Cardholder's Name" />
        </Form.Group>
        <Form.Group controlId="formBasicCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="credit-card number" placeholder="Valid Card Number" />
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control placeholder="MM/YY" />
          </Col>
          <Col>
            <Form.Label>CVC</Form.Label>
            <Form.Control placeholder="CVC" />
          </Col>
        </Form.Row>
        <Form.Group controlId="formBasicDeliveryAddress">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control type="cdelivery address" placeholder="Unit, building address where food will be delivered " />
        </Form.Group>
        <Button variant="dark" type="submit">
          Pay Now
        </Button>
    </div>
  );
}
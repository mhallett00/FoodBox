import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SellerMenuAddItem() {

  return (
    <>
      <div className="seller-name">
        <h3>Seller_Name</h3>
        <h5>Edit Menu Item</h5>
      </div>
      <Form>
        <Form.Group controlId="formItemName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control type="item-namę" placeholder="Item Name" />
        </Form.Group>
        <Form.Group controlId="formItemPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="item-price" placeholder="Item Price" />
        </Form.Group>
        <Form.Group controlId="formImageURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="item-image" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group>
          <div className="menu-item description">
            <label htmlFor="menu-item description">
              Description
            </label>
            <textarea
              placeholder="Type your menu item description here"
              className="form-control menu description"
              rows="5"
            />
          </div>
        <Button href="/seller_menu" variant="dark" type="submit">
          Submit Changes 
        </Button>
        </Form.Group>
      </Form>
    </>
  );
}
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./SellerMenuAddItem.scss";
import axios from 'axios';

export default function SellerMenuAddItem(props) {

  const { userData } = props;

  const history = useHistory();

  const [state, setState] = useState({
    name: '',
    description: '',
    image: '',
    quantity: 0,
    price: 0,
    is_active: true
  })
 
  const handleChange = (e) => {
    const {id, value} = e.target;
    setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createMenuItem(userData, state);
  }

  const createMenuItem = (userData, {
    name,
    description,
    image,
    quantity,
    price,
    is_active,
  }) => {
    axios.post('/api/menu_items', {
      user_id: userData.id,
      name,
      description,
      image,
      quantity,
      price_cents: price,
      is_active
    })
    .then(res => {
      history.push('/seller_menu');
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  return (
    <div>
      <div className="seller-name">
        <h2>{userData.first_name} {userData.last_name}'s Menu</h2>
        <h5>Add Menu Items</h5>
        <hr/>
      </div>
      <Form className="seller-name add-item">
        <Form.Group controlId="name">
          <Form.Label>Item Name</Form.Label>
          <Form.Control type="item-name" placeholder="Item Name" value={state.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="item-price" placeholder="Item Price" value={state.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="item-quantity" placeholder="Quantity" value={state.quantity} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="item-image" placeholder="Photo URL" value={state.image} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="item-description" 
          placeholder="Type your menu item description here" 
          value={state.description} 
          onChange={handleChange}
          as="textarea"
          rows="5"
        />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleSubmit}>
          + Add Item 
        </Button>
      </Form>
    </div>
  );
}
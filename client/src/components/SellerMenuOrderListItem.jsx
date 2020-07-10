import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function SellerMenuOrderListItem(props) {

  return (
    <tr>
      <td><img src={props.image}/>Image Here</td>
      <td>
        <h3>{props.seller_fn} {props.seller_ln}'s {props.item_name}</h3>
        <h5></h5>
        
        <Button variant="dark" type="submit">
          Add to Cart
        </Button>
      </td>
      <td colSpan="2">{props.description}</td>
      <td>$ {props.price / 100}</td>
    </tr>
  );
}
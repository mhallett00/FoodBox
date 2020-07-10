import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function SellerMenuListItem(props) {

console.log('listitemprops', props)
  return (
    <tr>
      <td><img src={props.image} width="120vw" heigh="90vh"/></td>
      <td>
        <h3>{props.seller_fn} {props.seller_ln}'s {props.item_name}</h3>
        <h5></h5>
        <form action="/register method=POST" className="menu-availability">
        <h5>Available to Order?</h5>
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
            <label className="custom-control-label yes" >Yes</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
            <label class="custom-control-label" for="customRadio2">No</label>
          </div>
        </form>
        <Button variant="dark" type="submit">
          Edit Item
        </Button>
        <Button variant="danger" type="submit">
          Delete Item 
        </Button>
      </td>
      <td colSpan="2">{props.description}</td>
      <td>$ {props.price / 100}</td>
    </tr>
  );
}
import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useStickyState from './useStickyState';


export default function BuyerCartListItem(props) {
  const {item_name, seller_fn, seller_ln, image, id, description, price, removeCartItem} = props;

  return (
    
    <tr>
      <td><img src={image} width="120vw" heigh="90vh"/></td>
      <td>
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
        <h5>Quantity</h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" 
            disabled={props.decOrderQuantity === 0} 
            onClick={props.decOrderQuantity}
          >-</Button>
          <Button variant="light">{props.order_quantity}</Button>
          <Button variant="light"
            onClick={props.incOrderQuantity}
            // onClick={addOne}
          >+</Button>
        </ButtonGroup>
        <br/>
        <Button onClick={removeCartItem} variant="dark" type="submit">
          Remove
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>
        ${(props.order_quantity * price)/100}
        </td>
    </tr>
    
  );
}
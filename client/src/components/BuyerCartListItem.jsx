import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useStickyState from './useStickyState';


export default function BuyerCartListItem(props) {
  const { key, item_name, seller_fn, seller_ln, image, id, description, price, removeCartItem, updateQty} = props;
  // const [ quantity, setQuantity ] = useState(1);

  // const addOne = () => {
  //   updateQty(id, order_quanitity + 1)
  // }
  
  // const subtractOne = () => {
  //   updateQty(id, order_quanitity - 1)
  // }

  return (
    
    <tr>
      <td><img src=""/>{image}</td>
      <td>
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
        <h5>Single order - 6 pieces</h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" 
            disabled={props.decOrderQuantity === 0} 
            onClick={props.decOrderQuantity}
            // onClick={subtractOne}
          >-</Button>
          <Button variant="light">{props.order_quantity}</Button>
          <Button variant="light"
            onClick={props.incOrderQuantity}
            // onClick={addOne}
          >+</Button>
        </ButtonGroup>
        <br/>
        <Button onClick={props.removeCartItem} variant="dark" type="submit">
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
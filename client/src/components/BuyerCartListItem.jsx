import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import useStickyState from './useStickyState';


export default function BuyerCartListItem(props) {
  const { item_name, seller_fn, seller_ln, image, id, quantity, description, price, removeCartItem } = props;
  const [ itemCount, setItemCount ] = useState(1);

  return (
    
    <tr>
      <td><img src=""/>{image}</td>
      <td>
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
        <h5>Single order - 6 pieces</h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" onClick={(id) => setItemCount(itemCount - 1)}>-</Button>
          <Button variant="light">{itemCount}</Button>
          <Button variant="light" onClick={(id) => setItemCount(itemCount + 1)}>+</Button>
        </ButtonGroup>
        <br/>
        <Button onClick={() => removeCartItem(props)} variant="dark" type="submit">
          Remove
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>${(itemCount * price)/100}</td>
    </tr>
    
  );
}
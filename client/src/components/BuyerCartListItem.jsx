import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function BuyerCartListItem(props) {
  const { name, image, user_id, seller_name, quantity, description, price_cents } = props;
  const [itemCount, setItemCount] = useState(1);

  return (
    
    <tr>
      <td><img src=""/>{image}</td>
      <td>
        <h3>{seller_name}'s {name}</h3>
        <h5>Single order - 6 pieces</h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" onClick={() => setItemCount(itemCount - 1)}>-</Button>
          <Button variant="light">{itemCount}</Button>
          <Button variant="light" onClick={() => setItemCount(itemCount + 1)}>+</Button>
        </ButtonGroup>
        <br/>
        <Button variant="dark" type="submit">
          Remove
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>${itemCount * price_cents}</td>
    </tr>
    
  );
}
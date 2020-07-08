import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BuyerCartListItem() {
  return (
    <tr>
      <td><img src=""/>Image Here</td>
      <td>
        <h3>Mama Beth's Spring Rolls</h3>
        <h5>Single order - 6 pieces</h5>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light">-</Button>
          <Button variant="light">quantity</Button>
          <Button variant="light">+</Button>
        </ButtonGroup>
        <br/>
        <Button variant="dark" type="submit">
          Remove
        </Button>
      </td>
      <td colSpan="2">Food Description Here</td>
      <td>$ price/unit</td>
    </tr>
  );
}
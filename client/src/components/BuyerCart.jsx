import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BuyerCartListItem from './BuyerCartListItem';

export default function BuyerCart() {
  return (
    <>
      <div className='buyer-cart'>
        <h2>My Cart</h2>
      </div>
      <div> 
        <h3>Items in Cart</h3>
      </div> 
      <div className="buyer-cart list">
        <Table hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th colSpan="2">Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <BuyerCartListItem/>
          </tbody>
        </Table>
        <div className="buyer-cart subtotal">
        <Table borderless>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td></td>
              <td></td>
              <td colSpan="2">$ Price Subtotal Show</td>
            </tr>
          </tbody>
        </Table>
          <div className="buyer-cart checkout">
            <Button href="/order_payment" variant="dark" type="submit">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}





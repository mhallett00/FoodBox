import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BuyerCartListItem from './BuyerCartListItem';


export default function BuyerCart(props) {
  console.log("cart items >>>>", props)

  const BuyerListItem = props.cartItems.map((ListItem, index) => {
    return (
      <BuyerCartListItem 
        key={index}
        id={ListItem.id}
        item_name={ListItem.item_name} 
        image={ListItem.image} 
        user_id={ListItem.user_id} 
        seller_fn={ListItem.seller_fn} 
        seller_ln={ListItem.seller_ln} 
        description={ListItem.description} 
        price={ListItem.price} 
        removeCartItem={props.removeCartItem}
      />
    )
  })

  // subtotal price calculator 
  const priceSubtotal = () => {
    const itemPriceArray = [] 
    if (!BuyerCartListItem) {
      return 0;
    } else {
      BuyerListItem.forEach(ListItem => itemPriceArray.push(ListItem.props.price))
      const reducer = (a, b) => a + b;
      return itemPriceArray.reduce(reducer);
    }
  }

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
            { BuyerListItem }            
          </tbody>
        </Table>
        <div className="buyer-cart subtotal">
        <Table borderless>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td></td>
              <td colSpan="2"></td>
              <td>${priceSubtotal()/100}</td>
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





import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BuyerCartListItem from './BuyerCartListItem';

const BuyerListItemsData = [
  {
    name: "Spring Rolls",
    image: "",
    user_id: 1,
    seller_name: "Mama Beth",
    quantity: 1,
    description: "description",
    price_cents: 899
  },
  {
    name: "Pancit",
    image: "",
    user_id: 1,
    seller_name: "Mama Beth",
    quantity: 1,
    description: "description",
    price_cents: 899
  },
  {
    name: "Roasted Chicken",
    image: "",
    user_id: 1,
    seller_name: "Mama Beth",
    quantity: 1,
    description: "description",
    price_cents: 1099
  },
];

export default function BuyerCart() {
  
  const BuyerListItem = BuyerListItemsData.map((ListItem, index) => {
    return (
      <BuyerCartListItem 
        key={index}
        name={ListItem.name} 
        image={ListItem.image} 
        user_id={ListItem.user_id} 
        seller_name={ListItem.seller_name} 
        quantity={ListItem.quantity} 
        description={ListItem.description} 
        price_cents={ListItem.price_cents} 
      />
    )
  })

  // subtotal price calculator 
  const itemPriceArray = [] 
  BuyerListItem.forEach(ListItem => itemPriceArray.push(ListItem.props.price_cents))
  const reducer = (a, b) => a + b;
  let priceSubtotal = itemPriceArray.reduce(reducer);

  const [subtotal, setSubtotal] = useState(priceSubtotal)



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
              <td>${priceSubtotal}</td>
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





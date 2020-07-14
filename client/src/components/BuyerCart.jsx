import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BuyerCartListItem from './BuyerCartListItem';
import { priceSubtotal } from '../helpers/price_calcs'

export default function BuyerCart(props) {
  
  const { setCartItems, cartItems, removeCartItem } = props;

  const incOrderQuantity = (index) => {

    let newCartItems = [...cartItems];

    newCartItems[index].order_quantity ++;

    setCartItems(newCartItems)
  };

  const decOrderQuantity = (index) => {
    let newCartItems = [...cartItems];

    if (newCartItems[index].order_quantity > 0) {
      newCartItems[index].order_quantity --;
      setCartItems(newCartItems)
    }
    if (newCartItems[index].order_quantity <= 0) {
      removeCartItem(index);
    }
  };
  
  const BuyerListItem = cartItems ? cartItems.map((ListItem, index) => {
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
        order_quantity={ListItem.order_quantity} 
        price={ListItem.price} 
        removeCartItem={() => removeCartItem(index)}
        incOrderQuantity={() => incOrderQuantity(index)}
        decOrderQuantity={() => decOrderQuantity(index)}
        // updateQty={updateQty}
      />
    )
  }) : "No items!"

  // subtotal price calculator

  // const priceSubtotal = () => { 
  //   const itemPriceArray = [];
  //   if (props.cartItems.length === 0) {
  //     return 0;
  //   } else {
  //     props.cartItems.forEach(ListItem => itemPriceArray.push(ListItem.price * ListItem.order_quantity))
  //     const reducer = (a, b) => a + b;
  //     return itemPriceArray.reduce(reducer);
  //   }
  // }

  return (
    <div>
      <div className='buyer-cart'>
        <h2>My Cart</h2>
        <p>You currently have {BuyerListItem.length} items in your cart</p>
        <hr/>
      </div>
      <div className="buyer-cart list">
        <Table hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Items</th>
              <th colSpan="2">Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {BuyerListItem}       
          </tbody>
        </Table>
        <div className="buyer-cart subtotal">
        <Table borderless>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td></td>
              <td colSpan="2"></td>
              <td>${priceSubtotal(cartItems)/100}</td>
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
    </div>
  );
}





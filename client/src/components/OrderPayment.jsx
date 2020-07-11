import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OrderPaymentListItem from './OrderPaymentListItem';
import PaymentDetails from './PaymentDetails';

export default function OrderPayment(props) {

  const OrderListItem = props.cartItems.map((ListItem, index) => {
    return (
      <OrderPaymentListItem 
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

  const priceSubtotal = () => {
    const itemPriceArray = [] 
    if (!OrderListItem) {
      return 0;
    } else {
      OrderListItem.forEach(ListItem => itemPriceArray.push(ListItem.props.price))
      const reducer = (a, b) => a + b;
      return itemPriceArray.reduce(reducer);
    }
  }

  const GST = (subtotal) => {
    return ((subtotal() * 0.05)/100).toFixed(2);
  }

  const QST = (subtotal) => {
    return ((subtotal() * 0.0995)/100).toFixed(2);
  }

  const deliveryFee = () => {
    return (2)
  }

  const totalPrice = (subtotal) => {
    let total = (subtotal + (subtotal * 0.1495)).toFixed(2);
    return total;
  }

  return (
    <>
      <div className='order-payment'>
        <h2>My Cart</h2>
      </div>
      <div> 
        <h3>Items in Cart</h3>
      </div> 
      <div className="order-payment list">
        <Table borderless hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th colSpan="2">Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {OrderListItem}
          </tbody>
        </Table>
        <div className="order-payment subtotal">
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${priceSubtotal()/100} </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>${GST(priceSubtotal)}</td>
              </tr>
              <tr>              
                <td>QST</td>
                <td>${QST(priceSubtotal)}</td>
              </tr>
              <tr> 
                <td>Delivery</td>
                <td>${deliveryFee()}</td>
              </tr>
              <tr> 
                <td><h4>Total</h4></td>
                <td><h4>${totalPrice(priceSubtotal()/100)}</h4></td>
              </tr>
            </tbody>
          </Table>
          <PaymentDetails/>
          </div>
        </div>

    </>
  );
}





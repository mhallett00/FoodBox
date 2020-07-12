import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OrderPaymentListItem from './OrderPaymentListItem';
import { useHistory } from 'react-router-dom';
// import PaymentDetails from './PaymentDetails';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {priceSubtotal, GST, QST, deliveryFee, totalPrice} from '../helpers/price_calcs'
import axios from 'axios';

export default function OrderPayment(props) {

  const history = useHistory();

  const { cartItems, setCartItems, userData } = props;

  const total_price = totalPrice(priceSubtotal(cartItems) / 100, deliveryFee()).toFixed(2); 

  const OrderListItem = cartItems
  ? props.cartItems.map((ListItem, index) => {
    return (
      <OrderPaymentListItem 
        key={index}
        id={ListItem.id}
        item_name={ListItem.item_name}
        quantity={ListItem.order_quantity} 
        image={ListItem.image} 
        user_id={ListItem.user_id} 
        seller_fn={ListItem.seller_fn} 
        seller_ln={ListItem.seller_ln} 
        description={ListItem.description} 
        price={ListItem.price}
      />
    )
  })
  : "No order items!";


  // STRIPE PAYMENT
  const stripe = useStripe();
  const elements = useElements();
  
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email: userData.email,
        name: `${userData.first_name} ${userData.last_name}`,  
      }
    });

    console.log(paymentMethod)

    if (error) {
      console.log('[error]', error);
    } else {
      const { id } = paymentMethod;

    axios.post("/api/payment", { 
      id,
      amount: total_price * 100
    })
    .then((res) =>{
      if (res.status === 200) {
        // axios.post('/api/cart', {
        //   buyer_id: userData.id,
        //   cart_id: userData.cart_id
        // })
        localStorage.removeItem('cart')
        setCartItems([])
        history.push('/order_confirm')
        
      }
      
    })
    .catch(err=> console.log(err));

    }
  };

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
              <th>Image</th>
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
                <td>${priceSubtotal(cartItems)/100} </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>${GST(priceSubtotal(cartItems)/100).toFixed(2)}</td>
              </tr>
              <tr>              
                <td>QST</td>
                <td>${QST(priceSubtotal(cartItems)/100).toFixed(2)}</td>
              </tr>
              <tr> 
                <td>Delivery</td>
                <td>${deliveryFee().toFixed(2)}</td>
              </tr>
              <tr> 
                <td><h4>Total</h4></td>
                <td><h4>${total_price}</h4></td>
              </tr>
            </tbody>
          </Table>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
            <button type="submit" disabled={!stripe}>
              Pay
            </button>
          </form>
        </div>
      </div>

    </>
  );
}





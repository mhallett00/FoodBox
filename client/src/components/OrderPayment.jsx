import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OrderPaymentListItem from './OrderPaymentListItem';
import PaymentDetails from './PaymentDetails';

export default function OrderPayment() {
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
            <OrderPaymentListItem/>
          </tbody>
        </Table>
        <div className="order-payment subtotal">
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$ Subtotal Price Show</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>$ GST Price Show</td>
              </tr>
              <tr>              
                <td>QST</td>
                <td>$ QST Price Show</td>
              </tr>
              <tr> 
                <td>Delivery</td>
                <td>$ Delivery Price Show</td>
              </tr>
              <tr> 
                <td><h4>Total</h4></td>
                <td><h4>$ Total Price Show</h4></td>
              </tr>
            </tbody>
          </Table>
          <PaymentDetails/>
          </div>
        </div>

    </>
  );
}





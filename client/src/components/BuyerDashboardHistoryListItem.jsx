import React from 'react';
import Button from 'react-bootstrap/Button';

export default function BuyerDashboardHistoryListItem() {

  return (
      <tr>
        <td>Order Quantity</td>
        <td>Item Name</td>
        <td >Order Id</td>
        <td>Seller Name</td>
        <td>Delivery Address</td>
        <td>Date Delivered</td>
      </tr>
  );
}
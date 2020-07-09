import React from "react";
import Table from 'react-bootstrap/Table';
import SellerOrderDashboardListItem from './SellerOrderDashboardListItem';

export default function SellerOrderDashboard() {
  return (
    <>
      <div className='seller-dashboard'>
        <h2>Home_Cook_Name's Dashboard</h2>
      </div>
      <div className='seller-dashboard date'>
        <h4>Orders for (Month, Date, Year) current day</h4>
      </div>
      <div className="seller-dashboard list">
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Order Quantity</th>
              <th>Item Name</th>
              <th >Order Id</th>
              <th>Customer Name</th>
              <th>Delivery Address</th>
              <th>Order Fulfilled</th>
            </tr>
          </thead>
          <tbody>
            <SellerOrderDashboardListItem/>
          </tbody>
        </Table>
      </div>
    </>
  );
}





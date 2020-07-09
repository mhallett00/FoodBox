import React from "react";
import Table from 'react-bootstrap/Table';
import BuyerDashboardOrderListItem from './BuyerDashboardOrderListItem';
import BuyerDashboardHistoryListItem from './BuyerDashboardHistoryListItem';

export default function BuyerDashboard() {
  return (
    <>
      <div className='buyer-dashboard'>
        <h2>Welcome, BUYER_EMAIL!</h2>
      </div>
      <div className='buyer-dashboard upcoming'>
        <h4>You have an upcoming delivery today from SELLER_NAME</h4>
      </div>
      <div className="buyer-dashboard list">
        <div className="buyer-dashboard upcoming_list">
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Order Quantity</th>
                <th>Item Name</th>
                <th>Order Id</th>
                <th>Seller Name</th>
                <th>Delivery Address</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              <BuyerDashboardOrderListItem/>
            </tbody>
          </Table>
        </div>
        <div className='buyer-dashboard history'>
          <h4>Order History</h4>
        </div>
        <div className="buyer-dashboard history_list">
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Order Quantity</th>
                <th>Item Name</th>
                <th>Order Id</th>
                <th>Seller Name</th>
                <th>Delivery Address</th>
                <th>Date Delivered</th>
              </tr>
            </thead>
            <tbody>
              <BuyerDashboardHistoryListItem/>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}





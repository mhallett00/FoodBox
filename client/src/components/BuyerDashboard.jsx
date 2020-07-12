import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

import BuyerDashboardOrderListItem from './BuyerDashboardOrderListItem';
import BuyerDashboardHistoryListItem from './BuyerDashboardHistoryListItem';
import axios from 'axios';

export default function BuyerDashboard(props) {

  const [ orderHistory, setOrderHistory ] = useState();

  const { 
    id,
    first_name,
    last_name
  } = props.userData;

  const getOrderHistory = (user_id) => {
    axios.get(`/api/orders/users/${user_id}`)
    .then(res => {
      setOrderHistory(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect(() => {
    getOrderHistory(id);
  }, []);

  const completeOrders = orderHistory
    ? orderHistory.map((orderId, index) => {
      return(
        orderId.completed ?
          <BuyerDashboardHistoryListItem
            key={index}
            menuItems={orderId.menu_items}
            order_id={orderId.id}
            order_total={orderId.order_total}
          />
        : "no orders!"
      );
    })
    : "No orders!";

    const upcomingOrders = orderHistory
    ? orderHistory.map((orderId, index) => {
      return(
        !orderId.completed ?
        <BuyerDashboardOrderListItem
        key={index}
        menuItems={orderId.menu_items}
        order_id={orderId.id}
        order_total={orderId.order_total}
        />
        : "no orders!"
      );
    })
    : "No menu!";  

    console.log(orderHistory)

  return (
    <>
      <div className='buyer-dashboard'>
        <h2>Welcome, {first_name}!</h2>
      </div>
      <div className="buyer-dashboard list">
        <div className="buyer-dashboard upcoming_list">
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Items</th>
                <th> Order Total</th>
              </tr>
            </thead>
            <tbody>
              {upcomingOrders}
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
                <th>Order Id</th>
                <th>Items</th>
                <th>Date Delivered</th>
              </tr>
            </thead>
            <tbody>
              {completeOrders}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}





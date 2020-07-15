import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import "./BuyerDashboard.scss";
import "./BuyerDashboardOrderListItem.scss";
import "./BuyerDashboardHistoryListItem.scss";
import BuyerDashboardOrderListItem from './BuyerDashboardOrderListItem';
import BuyerDashboardHistoryListItem from './BuyerDashboardHistoryListItem';
import axios from 'axios';

export default function BuyerDashboard(props) {

  const [ orderHistory, setOrderHistory ] = useState();

  const { 
    id
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
        orderId.completed &&
          <BuyerDashboardHistoryListItem
            key={index}
            menuItems={orderId.menu_items}
            order_id={orderId.id}
            order_total={orderId.order_total}
            seller_fn={orderId.userinfo[0].first_name}
            seller_ln={orderId.userinfo[0].last_name}
            order_id={orderId.id}
            order_quantity={orderId}
            order_total={orderId.total}
          />
      );
    })
    : "No orders!";

    const upcomingOrders = orderHistory
    ? orderHistory.map((orderId, index) => {
      return(
        !orderId.completed &&
        <BuyerDashboardOrderListItem
          key={index}
          menuItems={orderId.menu_items}
          order_id={orderId.id}
          order_total={orderId.order_total}
          seller_fn={orderId.userinfo[0].first_name}
          seller_ln={orderId.userinfo[0].last_name}
          order_id={orderId.id}
          order_quantity={orderId}
          order_total={orderId.total}
        />
      );
    })
    : "No menu!";  

  return (
    <div className='buyer-dashboard'>
      <div className='buyer-dashboard header'>
        <h2>Your Orders</h2>
        <hr/>
        <h4>Upcoming Deliveries</h4>
        <hr/>
      </div>
      <div className="buyer-dashboard upcoming_list">
        <Table borderless hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Items</th>
              <th>Seller Name</th>
              <th>Order Total</th>
            </tr>
          </thead>
          <tbody>
            {upcomingOrders}
          </tbody>
        </Table>
      </div>
      <div className='buyer-dashboard history'>
        <hr/>
        <h4>Order History</h4>
        <hr/>
      </div>
      <div className="buyer-dashboard history_list">
        <Table borderless hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Items</th>
              <th>Seller Name</th>
              <th>Order Total</th>
            </tr>
          </thead>
          <tbody>
            {completeOrders}
          </tbody>
        </Table>
      </div>
    </div>
  );
}





import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import SellerOrderDashboardListItem from './SellerOrderDashboardListItem';
import axios from 'axios';

export default function SellerOrderDashboard(props) {

  const [ activeOrders, setActiveOrders ] = useState();

  const { 
    id,
    first_name,
    last_name
  } = props.userData;

  const getActiveOrders= (user_id) => {
    axios.get(`/api/orders/users/sellers/${user_id}`)
    .then(res => {
      setActiveOrders(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect(() => {
    getActiveOrders(id);
  }, []);

    const upcomingOrders = activeOrders
    ? activeOrders.map((orderId, index) => {
      return(
        <SellerOrderDashboardListItem
        key={index}
        menuItems={orderId.menu_items}
        order_id={orderId.id}
        order_total={orderId.order_total}
        />
      );
    })
    : "No menu!";  

    console.log("activeorders", activeOrders)
  return (
    <>
      <div className='seller-dashboard'>
        <h2>{first_name}'s Dashboard</h2>
      </div>
      <div className="seller-dashboard list">
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Items</th>
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





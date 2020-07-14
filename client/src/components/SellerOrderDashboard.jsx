import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import SellerOrderDashboardListItem from './SellerOrderDashboardListItem';
import axios from 'axios';

export default function SellerOrderDashboard(props) {

  const [ activeOrders, setActiveOrders ] = useState();

  const { 
    id
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

  const confirmDelivery = (order_id) => {
    const newActiveOrders = activeOrders.filter((order) => {
     return order.id !== order_id;
    });
    
    axios.post(`api/orders/${order_id}`)
    .then(() => {
      setActiveOrders(newActiveOrders)
      // getActiveOrders(id)
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
        buyer_fn={orderId.userinfo[0].first_name}
        buyer_ln={orderId.userinfo[0].last_name}
        order_id={orderId.id}
        order_quantity={orderId}
        order_total={orderId.total}
        onConfirm={() => confirmDelivery(orderId.id)}
        />
      );
    })
    : "No menu!";  

  return (
    <>
      <div className='seller-dashboard'>
        <h2>Your Menu's Dashboard</h2>
      </div>
      <div className="seller-dashboard list">
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Items</th>
              <th>Customer Name</th>
              <th>Order Total</th>
              <th>Fulfill Order</th>
            </tr>
          </thead>
          <tbody>
            {upcomingOrders}
          </tbody>
        </Table>
      </div>
    </>
  );
}





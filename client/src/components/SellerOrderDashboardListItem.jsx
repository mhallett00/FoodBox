import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import OHFrag from './OHFrag'

export default function SellerOrderDashboardListItem(props) {
  
  const { menuItems } = props;

  const [state, setState] = useState({
    order_fulfilled: true 
  })
 
  const handleChange = (e) => {
    const {id, value} = e.target;
    setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }

  const orderfragment = menuItems
  ? menuItems.map((menuItem, index) => {
    return(
      menuItem.user_id === 
      <OHFrag
        key={index}
        image={menuItem.image}
        item_name={menuItem.name}
        item_quantity={menuItem.order_quantity}
      />
    );
  })
  : "No orders!";

  return (
      <tr>
        <td>Order Id</td>
        <td>{OHFrag}</td>
        <td>Order Quantity</td>
        <td>Customer Name</td>
        <td>Delivery Address</td>
        <td>
          {/* checkbox currently not working yet*/}
          <input type='checkbox' id='order_fullfilled' value="true" checked={state.order_fulfilled === "true"} onChange={handleChange}/>
        </td>
      </tr>
  );
}
import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

export default function SellerOrderDashboardListItem() {
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

  return (
      <tr>
        <td>Order Quantity</td>
        <td>Item Name</td>
        <td>Order Id</td>
        <td>Customer Name</td>
        <td>Delivery Address</td>
        <td>
          {/* checkbox currently not working yet*/}
          <input type='checkbox' id='order_fullfilled' value="true" checked={state.order_fulfilled === "true"} onChange={handleChange}/>
        </td>
      </tr>
  );
}
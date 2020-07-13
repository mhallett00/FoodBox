import React from 'react';
import Button from 'react-bootstrap/Button';
import OHFrag from './OHFrag'

export default function BuyerDashboardHistoryListItem(props) {

  const { menuItems, order_id, order_total } = props;

  const orderfragment = menuItems
  ? menuItems.map((menuItem, index) => {
    return(
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
        <td >{order_id}</td>
        <td>{orderfragment}</td>
        <td>{order_total}</td>
      </tr>
  );
}
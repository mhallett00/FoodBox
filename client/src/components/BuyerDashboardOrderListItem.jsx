import React from 'react';
import Button from 'react-bootstrap/Button';
import OHFrag from './OHFrag'
import './BuyerDashboardOrderListItem.scss'

export default function BuyerDashboardOrderListItem(props) {

    const { menuItems, order_id, order_total, seller_fn, seller_ln, order_quantity } = props;

    const orderfragment = menuItems
    ? menuItems.map((menuItem, index) => {
      return(
        <OHFrag
        key={index}
        image={menuItem.image}
        item_name={menuItem.name}
        item_quantity={order_quantity.cartiteminfo[index].order_quantity}
        />
      );
    })
    : "No orders!";
  return (
      <tr>
        <td>{order_id}</td>
        <td>{orderfragment}</td>
        <td>{seller_fn} {seller_ln}</td>
        <td>$ {(order_total / 100).toFixed(2)}</td>
      </tr>
  );
}
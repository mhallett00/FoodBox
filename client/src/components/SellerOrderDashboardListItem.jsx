import React from 'react';
// import Form from 'react-bootstrap/Form';
import OHFragSeller from './OHFragSeller';
import Button from 'react-bootstrap/Button';

export default function SellerOrderDashboardListItem(props) {
 
  const { menuItems, order_quantity, onConfirm } = props;
 
  const orderfragment = menuItems
  ? menuItems.map((menuItem, index) => {
    return(
      <OHFragSeller
        key={index}
        image={menuItem.image}
        item_name={menuItem.name}
        item_quantity={order_quantity.cartiteminfo[index].order_quantity}
        // order_quantity={props.order_quanitity[index].order_quantity}
      />
    );
  })
  : "No orders!";

  return (
      <tr>
        <td>{props.order_id}</td>
        <td>{orderfragment}</td>
        {/* <td>Order Quantity</td> */}
        <td>{props.buyer_fn} {props.buyer_ln}</td>
        <td>$ {(props.order_total / 100).toFixed(2)}</td>
        <td>
          {/* checkbox currently not working yet*/}
          <Button variant="dark" type="submit" onClick={onConfirm}>
              Confirm
          </Button>
        </td>
      </tr>
  );
}
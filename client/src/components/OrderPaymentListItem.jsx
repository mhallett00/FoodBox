import React from "react";
import Image from 'react-bootstrap/Image';
import "./OrderPaymentListItem.scss";


export default function OrderPaymentListItem(props) {
  const { item_name, seller_fn, seller_ln, image, id, description, price, quantity } = props;

  return (
    <tr>
      <td className="order-payment item image">
        <Image src={image} thumbnail/>
      </td>
      <td className="order-payment item name">
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
      </td>
      <td>
        <h6>{quantity}</h6>
      </td>
      <td colSpan="2">{description}</td>
      <td>${price * quantity/100}</td>
    </tr>
  );
}
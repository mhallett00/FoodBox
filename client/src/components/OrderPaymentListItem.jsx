import React from "react";


export default function OrderPaymentListItem(props) {
  const { item_name, seller_fn, seller_ln, image, id, description, price, quantity } = props;

  return (
    <tr>
      <td><img src={image} width="120vw" heigh="90vh"/></td>
      <td>
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
      </td>
      <td>
        <h6>{quantity}</h6>
      </td>
      <td colSpan="2">{description}</td>
      <td>${price/100}</td>
    </tr>
  );
}
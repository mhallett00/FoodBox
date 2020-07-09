import React from "react";


export default function OrderPaymentListItem() {
  return (
    <tr>
      <td><img src=""/>Image Here</td>
      <td>
        <h3>Mama Beth's Spring Rolls</h3>
        <h5>Single order - 6 pieces</h5>
        <h5>Quantity</h5>
        <h6>Order Quantity Here</h6>
      </td>
      <td colSpan="2">Food Description Here</td>
      <td>$ price/unit</td>
    </tr>
  );
}
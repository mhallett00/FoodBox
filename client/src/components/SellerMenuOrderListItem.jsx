import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./SellerMenuOrderListItem.scss";
import { propTypes } from 'react-bootstrap/esm/Image';

export default function SellerMenuOrderListItem(props) {
  const { seller_fn, seller_ln, item_name, description, price, addCartItem, image } = props;

  return (
    <tr className="seller-menu order-list item" >
      <td className="seller-menu order-list image">
        <Image src={image} thumbnail/>
      </td>
      <td className="seller-menu order-list name">
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
        <h5></h5>

        <Button onClick={() => addCartItem(props)} variant="dark" type="submit">
          Add to Cart
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>$ {price / 100}</td>
    </tr>
  );
}
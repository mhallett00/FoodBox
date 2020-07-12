import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuOrderListItem from './SellerMenuOrderListItem';
import axios from 'axios';

export default function SellerMenuList(props) {

  const [menuData, setMenuData] = useState();

  const {
    first_name,
    last_name
  } = props.userData;

  const getMenuItems = (user_id) => {
    axios.get(`/api/menu_items/users/${user_id}`)
    .then(res => {
      setMenuData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect((id) => {
    getMenuItems(id);
  }, []);

  const SellerMenuOrderListItems = menuData
    ? menuData.map((menuItem) => {

      return(
        <SellerMenuOrderListItem
          key={menuItem.id}
          id={menuItem.id}
          seller_fn={first_name}
          seller_ln={last_name}
          image={menuItem.image}
          description={menuItem.description}
          item_name={menuItem.name}
          is_active={menuItem.is_active}
          price={menuItem.price_cents}
          quantity={menuItem.quantity}
          addCartItem={props.addCartItem}
        />
      );
    })
    : "No menu!"; 

  return (
    <>
      <div className='seller-menu order'>
        <h2>{first_name} {last_name}'s Menu Items</h2>
      </div>
      <div className="seller-menu order list">
        <Table hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th colSpan="2">Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {SellerMenuOrderListItems}
          </tbody>
        </Table>
      </div>
    </>
  );
}





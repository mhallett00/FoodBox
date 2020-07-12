import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuOrderListItem from './SellerMenuOrderListItem';
import axios from 'axios';

export default function SellerMenuOrderList(props) {

  const { addCartItem } = props;
  const [menuData, setMenuData] = useState();

  console.log(props)

  const {
    id,
    first_name,
    last_name
  } = props.userData;

  const getMenuItems = (user_id) => {
    axios.get(`/api/menu_items/users/${user_id}`)
    .then(res => {
      console.log("axios get", res.data)
      setMenuData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect(() => {
    getMenuItems(id);
  }, []);

  const SellerMenuOrderListItems = menuData
    ? menuData.map((menuItem, index) => {
      console.log("CARTITEM:", menuItem)
      return(
        <SellerMenuOrderListItem
          key={index}
          id={menuItem.id}
          seller_fn={first_name}
          seller_ln={last_name}
          image={menuItem.image}
          description={menuItem.description}
          item_name={menuItem.name}
          is_active={menuItem.is_active}
          price={menuItem.price_cents}
          quantity={menuItem.quantity}
          addCartItem={addCartItem}
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
          <tbody>{SellerMenuOrderListItems}
            </tbody>
        </Table>
      </div>
    </>
  );
}





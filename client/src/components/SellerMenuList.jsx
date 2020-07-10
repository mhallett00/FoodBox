import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuListItem from './SellerMenuListItem';
import axios from 'axios';

export default function SellerMenuList(props) {

  console.log("PROPS:", props)
  const [menuData, setMenuData] = useState();

  const { 
    id,
    first_name,
    last_name
  } = props.userData;

  const getMenuItems = (user_id) => {
    axios.get(`/api/menu_items/users/${user_id}`)
    .then(res => {
      console.log('data:', res.data)
      setMenuData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect(() => {
    getMenuItems(id);
  }, []);

  const sellerMenuItems = menuData
    ? menuData.map((menuItem) => {
      console.log('menu_item:', menuItem)
      return(
        <SellerMenuListItem
          key={menuItem.id}
          seller_fn={first_name}
          seller_ln={last_name}
          description={menuItem.description}
          item_name={menuItem.name}
          is_active={menuItem.is_active}
          image={props.image}
          price={menuItem.price_cents}


        />
      );
    })
    : "No menu!"; 

  return (
    <>
      <div className='seller-menu'>
        <h2>{first_name} {last_name}'s Menu Items</h2>
      </div>
      <Button href="/seller_menu/add_item" variant="dark" type="submit">
        Add Item
      </Button>
      <div className="seller-menu list">
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
            {sellerMenuItems}
          </tbody>
        </Table>
      </div>
    </>
  );
}





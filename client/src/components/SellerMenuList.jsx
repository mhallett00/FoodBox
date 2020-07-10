import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuListItem from './SellerMenuListItem';
import axios from 'axios';

export default function SellerMenuList(props) {

  const [menuData, setMenuData] = useState();
  console.log("PROPS:", props)
  console.log("STATE;", menuData)

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

  const delMenuItem = (item_id) => {
    const newMenuData = menuData.filter((item) => {
     return item.id !== item_id;
    });
    
    axios.delete(`api/menu_items/${item_id}`)
    .then(() => {
      setMenuData(() => {
        return newMenuData
      })
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
          image={menuItem.image}
          price={menuItem.price_cents}
          onDelete={() => delMenuItem(menuItem.id)}
          // onEdit={() => editMenuItem(menuItem.id)}
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

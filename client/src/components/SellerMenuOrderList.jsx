import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuOrderListItem from './SellerMenuOrderListItem';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SellerMenuOrderList(props) {

  const { addCartItem, selectedCook } = props;
  const [menuData, setMenuData] = useState();

  const history = useHistory();


  console.log(props)

  const {
    id,
    first_name,
    last_name
  } = props.userData;

  const getMenuItems = (seller_id) => {
    axios.get(`/api/menu_items/users/${seller_id}`)
    .then(res => {
      console.log("axios get", res.data)
      setMenuData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  useEffect(() => {
    if (selectedCook) {
      console.log("SELECTEDCOOK", selectedCook)
      getMenuItems(selectedCook.id);
    } else {
      history.push('/search_cook')
    }
  }, []);

  const SellerMenuOrderListItems = menuData
    ? menuData.map((menuItem, index) => {
      console.log("CARTITEM:", menuItem)
      return(
        <SellerMenuOrderListItem
          key={index}
          id={menuItem.id}
          seller_fn={selectedCook.cook_fn}
          seller_ln={selectedCook.cook_ln}
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
        {selectedCook &&
          <h2>
            {selectedCook.cook_fn} {selectedCook.cook_ln}'s Menu Items
          </h2>}
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
        <Button variant="dark" href='/cart' type="submit">
            Go To Cart
        </Button>
      </div>
    </>
  );
}





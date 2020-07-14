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

  let token = JSON.parse(localStorage.getItem('token'))

  console.log(props)

  const {
    id,
    first_name,
    last_name
  } = props.userData;

  const getMenuItems = (seller_id) => {
    axios.get(`/api/menu_items/users/${seller_id}`)
    .then(res => {
      setMenuData(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    
  }

  const addSelectedCook = (state, token) => {
    let tokenWithCook = {
      ...token,
      seller : {
        id: state.id,
        cook_fn: state.cook_fn,
        cook_ln: state.cook_ln,
      }
    }
    localStorage.setItem('token', JSON.stringify(tokenWithCook));

  }

  useEffect(() => {
    if (selectedCook) {
      addSelectedCook(selectedCook, token)
      getMenuItems(selectedCook.id);
    } else {
      history.push('/search_cook')
    }
  }, []);

  const SellerMenuOrderListItems = menuData
    ? menuData.map((menuItem, index) => {
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
          <tbody>
            {SellerMenuOrderListItems}
          </tbody>
        </Table>
        <Button variant="dark" href='/cart' type="submit">
            Go to Cart
        </Button>
      </div>
    </>
  );
}





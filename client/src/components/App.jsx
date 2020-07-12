import React, { useState } from 'react';
import './App.scss';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Homepage';
import Navigation from './Navigation';
import About from './About';
import SearchCook from './SearchCook';
import Register from './Register';
import Login from './Login';
import BuyerCart from './BuyerCart';
import BuyerDashboard from './BuyerDashboard';
import OrderPayment from './OrderPayment';
import OrderConfirm from './OrderConfirm';
import SellerMenuList from './SellerMenuList';
import SellerMenuAddItem from './SellerMenuAddItem';
import SellerMenuEditItem from './SellerMenuEditItem';
import SellerMenuOrderList from './SellerMenuOrderList';
import SellerOrderDashboard from './SellerOrderDashboard';
import useStickyState from './useStickyState';

export default function App() {
  
  //  const [show, setShow] = useState(REGISTER);
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('token')) || "");
  const [cartItems, setCartItems] = useStickyState([])

  const addCartItem = (item) => {
    setCartItems([...cartItems, {
      ...item,
      order_quantity: 1
    }]);
  };

  // const incOrderQuantity = (item, index) => {
  //   setCartItems([...cartItems, {
  //     ...item[index],
  //     order_quantity: + 1
  //   }]);
  // };

  // const decOrderQuantity = (item, index) => {
  //   setCartItems([...cartItems, {
  //     ...item[index],
  //     order_quantity: - 1
  //   }]);
  // };

  const removeCartItem = (index) => {
    let itemsInCart = [...cartItems];

    itemsInCart.splice(index, 1)
    setCartItems([...itemsInCart]);
  };

  
  
  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      localStorage.removeItem('undefined');
    }
    setUserData = "";
  }

  axios({
    method: "GET",
    url: "/api",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <Router>
      <div>
        <div className="App">
        <Navigation userData={userData} logout={e => logout()}/>
        </div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/login">
            <Login
              setUserData={setUserData}
            // SET_PROFILE_DATA={SET_PROFILE_DATA}
            // dispatch={dispatch}
            // profileInfo={state.profileInfo}
          />
          </Route>
          <Route path="/register">
            <Register 
              setUserData={setUserData}
            />
          </Route>
          <Route path="/search_cook">
            <SearchCook />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <BuyerCart 
              removeCartItem={removeCartItem} 
              cartItems={cartItems}
              setCartItems={setCartItems}

            />
          </Route>
          <Route path="/order_payment">
            <OrderPayment cartItems={cartItems}/>
          </Route>
          <Route path="/order_confirm">
            <OrderConfirm />
          </Route>
          <Route path="/buyer_dashboard">
            <BuyerDashboard />
          </Route>
          <Route path="/seller_dashboard">
            <SellerOrderDashboard />
          </Route>
          <Route path="/seller_menu/add_item">
            <SellerMenuAddItem userData={userData}/>
          </Route>
          <Route path="/seller_menu/edit_item">
            <SellerMenuEditItem />
          </Route>
          <Route path="/seller_menu/order">
            <SellerMenuOrderList addCartItem={addCartItem} userData={userData}/>
          </Route>
          <Route path="/seller_menu">
            <SellerMenuList userData={userData} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>

        </Switch>

      </div>
    </Router>
  )
};





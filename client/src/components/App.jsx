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
import SearchCook2 from './SearchCook2';
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
import CreateCart from './CreateCart';

// Stripe payment system
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51GxK2EFjdfjgcidOJRFut1KmR2wihbdrukB6yshUqRlP1QtTna5ZRjYTGcgFgg1wwvVf5c4vNp3mw8FCRVq3dUnW0034b3GyjS');

export default function App() {
  
  //  const [show, setShow] = useState(REGISTER);
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('token')) || "");
  const [cartItems, setCartItems] = useStickyState([], 'cart');
  const [selectedCook, setSelectedCook ] = useState();

  const addCartItem = (item) => {
    setCartItems([...cartItems, {
      ...item,
      order_quantity: 1
    }]);
  };

  const removeCartItem = (index) => {
    let itemsInCart = [...cartItems];

    itemsInCart.splice(index, 1)
    setCartItems([...itemsInCart]);
  };

    
  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart');
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
        <Navigation userData={userData} logout={e => logout()} cartItems={cartItems}/>
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
          <Route path="/create_cart">
            <CreateCart 
              userData={userData} 
              setUserData={setUserData}
            />
          </Route>
          <Route path="/search_cook">
            {/* <SearchCook /> */}
            <SearchCook2 userData={userData} setSelectedCook={setSelectedCook}/>
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
            <Elements stripe={stripePromise}>
              <OrderPayment 
                userData={userData} 
                setCartItems={setCartItems} 
                cartItems={cartItems}
              />
            </Elements>
          </Route>
          <Route path="/order_confirm">
            <OrderConfirm userData={userData} setUserData={setUserData}/>
          </Route>
          <Route path="/buyer_dashboard">
            <BuyerDashboard userData={userData}/>
          </Route>
          <Route path="/seller_dashboard">
            <SellerOrderDashboard userData={userData}/>
          </Route>
          <Route path="/seller_menu/add_item">
            <SellerMenuAddItem userData={userData}/>
          </Route>
          <Route path="/seller_menu/edit_item">
            <SellerMenuEditItem />
          </Route>
          <Route path="/seller_menu/order">
            <SellerMenuOrderList 
              addCartItem={addCartItem}
              userData={userData}
              selectedCook={selectedCook}
            />
          </Route>
          <Route path="/seller_menu">
            <SellerMenuList userData={userData} />
          </Route>
          <Route path="/">
            <Homepage userData={userData}/>
          </Route>

        </Switch>

      </div>
    </Router>
  )
};





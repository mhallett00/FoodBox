import React, { useState, Fragment } from 'react';
import './App.scss';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

export default function App() {
  
  //  const [show, setShow] = useState(REGISTER);
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('token')) || "");
  
  const logout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
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
            <BuyerCart />
          </Route>
          <Route path="/order_payment">
            <OrderPayment />
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
            <SellerMenuOrderList userData={userData}/>
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





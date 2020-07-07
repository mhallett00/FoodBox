import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import Menu from './Menu';
import Register from './register';
import Login from './Login';




export default function App() {
  //  const [show, setShow] = useState(REGISTER);
  //  const [firstName, setFirstName] = useState("");
  //  const [lastName, setLastName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
   
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
        <nav>
          <header className="App-header">
            <div className="header-title">
              <div className="logo">
                <Link to="/">F O O D B O X</Link>
              </div>
                <Link className="react-links" to="/Homepage">Home</Link>
                <Link className="react-links" to="/about">About</Link>
                <Link className="react-links" to="/menu">Menu</Link>
                <Link className="react-links" to="/login">Login</Link>
              </div>

              <div className="App">
                <Login />
              </div>
              
          </header>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/login">
            <Login
            // SET_PROFILE_DATA={SET_PROFILE_DATA}
            // dispatch={dispatch}
            // profileInfo={state.profileInfo}
          />
            
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

      </div>

      </Router>
  )
};





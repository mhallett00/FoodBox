import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function CreateCart(props) {
  
  const { userData, setUserData } = props;

  const history = useHistory();

  let token = JSON.parse(localStorage.getItem('token'))

  const [address, setAddress] = useState({
    street_address: '',
    apartment: '',
    city: '',
    postal_code: '',
    country: ''
  })

  const addDeliveryDetails = (state, token) => {
    let tokenWithAddress = {
      ...token,
      address : {
        street_address: state.street_address,
        apartment: state.apartment,
        city: state.city,
        postal_code: state.postal_code,
        country: state.country
      }
    }
    setUserData(tokenWithAddress);
    localStorage.setItem('token', JSON.stringify(tokenWithAddress));
  }

  useEffect(() => {
    if (userData.address) {
      history.push('/search_cook')
    }
  }, [])

  const handleChange = (e) => {
    const {id, value} = e.target;
    setAddress(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addDeliveryDetails(address, token);
    history.push('/search_cook')
  }

  return (
    <div className='register-form-container'>
      <Form className="register-form">
      <h2 className="login-greeting">Create a Cart!</h2>
      <p>Type in your delivery address to continue</p>

        <Form.Group controlId="street_address">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="street_address" placeholder="Enter Street Address" value={address.street_address} onChange={handleChange}/>
        </Form.Group>

      <Form.Group controlId="apartment">
        <Form.Label>Apartment</Form.Label>
        <Form.Control type="apartment" placeholder="Enter Apartment" value={address.apartment} onChange={handleChange}/>
        </Form.Group>


      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="City" value={address.city} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="postal_code">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type="postal_code" placeholder="Postal Code" value={address.postal_code} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control type="country" placeholder="Country" value={address.country} onChange={handleChange}/>
        </Form.Group>

      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
    </div>
  );
}

// // export default class Login extends React.Component {

// //   constructor(props) {
// //     super(props);
// //   }


// //   render () {
// //     return (
// //     <div className="base-container">
// //       <div className="header">Login</div>
// //       <div className="content">
// //         <div className="image">
// //           <img src={''} alt=""/>
// //         </div>
// //         <div className="form">
// //         <div className="form-group">
// //         <label htmlFor="email">Email</label>
// //         <input type="email" name="email" placeholder="Email"/>
// //         </div>
// //         <div className="form-group">
// //         <label htmlFor="password">password</label>
// //         <input type="text" name="password" placeholder="password"/>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="footer">
// //       <button type="button" className="btn">Login</button>
// //     </div>
// //   </div>

// //     )

// //   }
// // }

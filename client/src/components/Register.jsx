import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

export default function Register(props) {

  const history = useHistory();

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isHomeCook: false,
    postalCode: ''
  })
 
  const handleChange = (e) => {
    const {id, value} = e.target;
    setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(state);
  }

  const createUser = ({ first_name, last_name, email, password, isHomeCook, postalCode }) => {
    //axios.post('/api/users) (register route), payload will be state.name, state.email ...
    axios.post('/api/users', {
      first_name,
      last_name,
      email,
      password_digest: password,
      is_seller: isHomeCook,
      seller_postcode: postalCode
    })
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.data[0]));
      props.setUserData(res.data[0]);
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='register-form-container'>
      <Form className="register-form">
        <h2 className="register-greeting">Create An Account</h2>
        <p>Please fill in the required information to continue.</p>
        <Form.Group controlId="first_name">
          <Form.Label>First name</Form.Label>
          <Form.Control type="first_name" placeholder="First Name" value={state.first_name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="last_name" placeholder="Last Name" value={state.last_name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={state.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        </Form.Group>
        {/* radio buttons  */}
        <form className="homecook-radio" action="/register method=POST">
          <div>
            <p>Are you interested in joining to become a home cook?</p>
            <input type='radio' id='isHomeCook' value="true" checked={state.isHomeCook == 'true'} onChange={handleChange}/>
            <label className="homecook-radio yes">Yes, count me in!</label><br/>
            <input type='radio' id='isHomeCook' value="false" checked={state.isHomeCook == 'false'} onChange={handleChange}/>
            <label className="homecook-radio no">No, just feed me!</label><br/>  
          </div>
  
        </form>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Postal Code" value={state.postalCode} onChange={handleChange}/>
        </Form.Group>
        {/* sign up button */}
        <Button variant="dark" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        <p><Link to="/login">Have an account? Sign in.</Link></p>
      </Form>
    </div>
  );
}

// export default class Register extends React.Component {

//     constructor(props) {
//       super(props);
//     }

//   render () {
//     return (
//       <React.Fragment>
//         <div className="base-container">
//           <div className="header">Register</div>
//             <div className="content">
//               <div className="image">
//                 <img src={""} alt=""/>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input type="email" name="email" placeholder="Email"/>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">password</label>
//                 <input type="text" name="password" placeholder="password"/>
//               </div>
//             </div>
//           </div>
//         <div className="footer">
//           <button type="button" className="btn">Register</button>
//         </div>
//         </React.Fragment>

//     )
//   }
// }
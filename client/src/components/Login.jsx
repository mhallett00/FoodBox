import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Login.scss";
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: ''

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
    loginUser(state);
  }

  const loginUser = ({email, password}) => {
    //axios post to login route
    axios.post('/api/sessions', {
      email: email,
      password_digest: password
    })
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.data));
      props.setUserData(res.data);
      history.push('/');
    })
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className='register-form-container'>
      <Form className="register-form">
      <h2 className="login-greeting">Welcome Back!</h2>
      <p>Type in your email and password to continue</p>
      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={handleChange}/>
        </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        </Form.Group>
      {/* sign  button */}
      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Log In
      </Button>
        <h4 className="login-greeting register">New to Foodbox?</h4>
        <p><Link to="/register">Please register to continue</Link></p>
      </Form>
    </div>
  );
}

// export default class Login extends React.Component {

//   constructor(props) {
//     super(props);
//   }


//   render () {
//     return (
//     <div className="base-container">
//       <div className="header">Login</div>
//       <div className="content">
//         <div className="image">
//           <img src={''} alt=""/>
//         </div>
//         <div className="form">
//         <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" placeholder="Email"/>
//         </div>
//         <div className="form-group">
//         <label htmlFor="password">password</label>
//         <input type="text" name="password" placeholder="password"/>
//         </div>
//       </div>
//     </div>
//     <div className="footer">
//       <button type="button" className="btn">Login</button>
//     </div>
//   </div>

//     )

//   }
// }

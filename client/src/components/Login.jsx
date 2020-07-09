import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function Register() {

  const [state, setState] = useState({
    email: '',
    password: ''

  })

  const handleChange = (e) => {
    const {id, value} = e.target;
    console.log('recording data', id, value);
    setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    }) 
  }

  return (
    <Form className="login-form">
      <h2 className="login-greeting">Welcome Back!</h2>
      <p>Type in your email and password to continue</p>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={handleChange}/>
        </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        </Form.Group>
      {/* sign  button */}
      <Button variant="dark" type="submit">
        Log In
      </Button>
      
      <h4 className="login-greeting register">New to Foodbox?</h4>
      <p>Please register to continue</p>
      <Button variant="dark" type="submit">
        Register
      </Button>
    </Form>
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

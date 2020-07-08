import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Register() {
  return (
    <Form className="login-form">
      <h2 className="login-greeting">Welcome Back!</h2>
      <p>Type in your email and password to continue</p>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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

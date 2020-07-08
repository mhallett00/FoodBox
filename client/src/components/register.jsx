import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Register() {
  
  return (
    <Form className="register-form">
      <h2 className="register-greeting">Create an account</h2>
      <p>Please fill in the required information to continue</p>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* radio buttons  */}
      <form action="/register method=POST">
        <p>Are you interested in joining to become a home cook?</p>
        <input type="radio" id="seller" name="is-homecook" value="true"/>
        <label for="yes">Yes, count me in!</label><br/>
        <input type="radio" id="buyer" name="is-buyer" value="false"/>
        <label for="no">No, just feed me!</label><br/>
      </form>
      <Form.Group controlId="formGroupPostalCode">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type="postal-code" placeholder="Postal Code" />
      </Form.Group>
      {/* sign up button */}
      <Button variant="dark" type="submit">
        Register
      </Button>
      <p><a href="/login">Have an account? Sign in.</a></p>
    </Form>
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
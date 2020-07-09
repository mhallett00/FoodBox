import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function Register(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    isHomeCook: true,
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
  return (
    <div className='register-form-container'>
      <Form className="register-form">
        <h2 className="register-greeting">Create an account</h2>
        <p>Please fill in the required information to continue</p>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" value={state.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        </Form.Group>
        {/* radio buttons  */}
        <form action="/register method=POST">
          <div>
            <p>Are you interested in joining to become a home cook?</p>
            <input type='radio' id='isHomeCook' value="true" checked={state.isHomeCook == 'true'} onChange={handleChange}/>
            <label>Yes, count me in!</label><br/>
            <input type='radio' value="false" id='isHomeCook' checked={state.isHomeCook == 'false'} onChange={handleChange}/>
            <label>No, just feed me!</label><br/>  
          </div>
  
        </form>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Postal Code" value={state.postalCode} onChange={handleChange}/>
        </Form.Group>
        {/* sign up button */}
        <Button variant="dark" type="submit">
          Register
        </Button>
        <p><a href="/login">Have an account? Sign in.</a></p>
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
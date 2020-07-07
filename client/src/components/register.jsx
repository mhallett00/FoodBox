import React from "react";

export class Register extends React.Component {

    constructor(props) {
      super(props);
    }



  render () {
    return (
      <React.Fragment>
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={""} alt=""/>
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email"/>
        </div>
        <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="text" name="password" placeholder="password"/>
        </div>
      </div>
    </div>
        <div className="footer">
          <button type="button" className="btn">Register</button>
        </div>
        </React.Fragment>

    )
  }
}
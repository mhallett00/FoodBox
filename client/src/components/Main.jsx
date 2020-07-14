import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Main(props) {

  const { userData } = props;

  console.log(userData)

  return (
    <div className="main">
      <div className="main-description group">
        <div className="main-description">
          <h2>Finally, a taste of authentic home cooking.</h2>
          <p>Stress-free, homecooked, flavourful, delicious, and budget-concious meals. Delivered right at your office so you could focus more at work.</p>
        {!userData &&
        <Fragment>
          <div className="main-login button">
            <Button variant="dark" href="/login"> Login </Button>{' '}
          </div>
          <div className="main-register link">
            <p>Not yet registered? Please <a href="/register">sign-up</ a> to begin.</p>
          </div>
        </Fragment>}
        {userData &&
        <Fragment>
          <div className="main-login button">
            <Button variant="dark" href="/search_cook">Search Cooks</Button>{' '}
          </div>
          <div className="main-register link">
            <p>Ready to checkout? Please <a href="/cart">check your cart</a> to complete your order.</p>
          </div>
          </Fragment>}
          </div>
        </div>
      <div className="main-image">
        <Image src="../placeholder-images/main-image.jpg" fluid="true"/>
      </div>
    </div>
  )
}


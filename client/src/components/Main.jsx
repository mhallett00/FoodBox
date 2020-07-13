import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Main() {
  return (
    <div className="main">
      <div className="main-description group">
        <div className="main-description">
          <h2>Finally, a taste of authentic home cooking.</h2>
          <p>Stress-free, homecooked, flavourful, delicious, and budget-concious meals. Delivered right at your office so you could focus more at work.</p>
        <div className="main-login button">
          <Button variant="dark" href="/login" >Order Now</Button>{' '}
        </div>
        <div className="main-register link">
          <span>Not yet registered? Please <a href="/register">sign-up</a> to begin.</span>
        </div>
      </div>
      </div>
      <div className="main-image">
        <Image src="../placeholder-images/main-image.jpg" fluid="true"/>
      </div>
    </div>
  )
}


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
<<<<<<< HEAD
          <p>Meatball porchetta shank rump sirloin salami pig kevin prosciutto bacon sausage chuck pork belly. Pancetta kielbasa chislic swine rump, sausage jerky fatback. Leberkas salami landjaeger pig chislic burgdoggen jerky flank. Shankle boudin chuck capicola, ham rump ribeye swine porchetta. Hamburger jowl chislic, corned beef shoulder swine ball tip sausage kielbasa. Porchetta pig pancetta shoulder salami chislic tail filet mignon frankfurter fatback.</p>
        {!userData &&
        <Fragment>
          <div className="main-login button">
            <Button variant="dark" href="/login"> Login </Button>{' '}
          </div>
          <div className="main-register link">
            <p>Not yet registered? Please <a href="/register">sign-up</ a> to begin.</p>
          </div>
        </Fragment>}
=======
          <p>Stress-free, homecooked, flavourful, delicious, and budget-concious meals. Delivered right at your office so you could focus more at work.</p>
        <div className="main-login button">
          <Button variant="dark" href="/login" >Order Now</Button>{' '}
        </div>
        <div className="main-register link">
          <span>Not yet registered? Please <a href="/register">sign-up</a> to begin.</span>
        </div>
>>>>>>> df7f29ca6113d72ded37cf307f74e52428c1199d
      </div>
      </div>
      <div className="main-image">
        <Image src="../placeholder-images/main-image.jpg" fluid="true"/>
      </div>
    </div>
  )
}


import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <div className="main-description">
        <h2>Finally, a taste of authentic home cooking.</h2>
        <p>Meatball porchetta shank rump sirloin salami pig kevin prosciutto bacon sausage chuck pork belly. Pancetta kielbasa chislic swine rump, sausage jerky fatback. Leberkas salami landjaeger pig chislic burgdoggen jerky flank. Shankle boudin chuck capicola, ham rump ribeye swine porchetta. Hamburger jowl chislic, corned beef shoulder swine ball tip sausage kielbasa. Porchetta pig pancetta shoulder salami chislic tail filet mignon frankfurter fatback.</p>
      <div className="main-login button">
        <Button variant="dark" href="/login"> Login </Button>{' '}
      </div>
      <div className="main-register link">
        <p>Not yet registered? Please <Link href="/register">sign-up</Link> to begin.</p>
      </div>
      <div className="main-image">
        <Image src="../placeholder-images/main-image.jpg" fluid="true" />
      </div>
      </div>
    </div>
  )
}


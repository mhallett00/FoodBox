import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './OrderConfirm.scss';
export default function OrderConfirm(props) {

  const { userData, setUserData } = props;
  
  let token = JSON.parse(localStorage.getItem('token'))

  const rmvDeliveryDetails = (token) => {
    let tokenWithoutAddress = {
      ...token
    }

    delete tokenWithoutAddress.address;

    setUserData(tokenWithoutAddress);
    localStorage.setItem('token', JSON.stringify(tokenWithoutAddress));
  }

  useEffect(() => {

  
    rmvDeliveryDetails(token)
  }, [])

  return (
    <div className="order-confirm">
      <div className="order-confirm-description group">
        <div className="order-confirm-description">
          <h2>Your order has been confirmed!</h2>
          <h4>Thank you for supporting our home cooks.</h4>
          <p>Meatball porchetta shank rump sirloin salami pig kevin prosciutto bacon sausage chuck pork belly. Pancetta kielbasa chislic swine rump, sausage jerky fatback. Leberkas salami landjaeger pig chislic burgdoggen jerky flank. Shankle boudin chuck capicola, ham rump ribeye swine porchetta. Hamburger jowl chislic, corned beef shoulder swine ball tip sausage kielbasa. Porchetta pig pancetta shoulder salami chislic tail filet mignon frankfurter fatback.</p>
        <div className="order-confirm-acknowledge button">
            <Button variant="dark" href="/buyer_page">Return Home</Button>{' '}
        </div>
        </div>
      </div>
    <div className="order-confirm-image">
        <Image src="https://images.pexels.com/photos/3785693/pexels-photo-3785693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" fluid="true" />
      </div>
    </div>
  )
}


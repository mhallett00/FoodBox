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
          <p>Your order helps our community's homecooks in supporting their families, sharing their culture and tradition alive through their passion of cooking. We hope that you continue to support our homecooks and their communities in building our culture through Foodbox.</p>
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


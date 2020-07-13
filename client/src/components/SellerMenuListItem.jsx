import React from 'react';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function SellerMenuListItem(props) {

  const { 
    image, 
    seller_fn, 
    seller_ln, 
    item_name, 
    onDelete, 
    description, 
    price 
  } = props;
  
  return (
    <tr>
      <td><img src={image} width="120vw" heigh="90vh"/></td>
      <td>
        <h3>{item_name}</h3>
        <h5></h5>
        {/* <form action="/register method=POST" className="menu-availability">
        <h5>Available to Order?</h5>
        <div className="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
            <label className="custom-control-label yes" >Yes</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
            <label className="custom-control-label" htmlFor="customRadio2">No</label>
          </div>
        </form> */}
        {/* <Button variant="dark" href="/seller_menu/edit_item" type="submit">
          Edit Item
        </Button> */}
        <Button variant="danger" type="submit" onClick={onDelete}>
          Delete Item 
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>$ {price / 100}</td>
    </tr>
  );
}
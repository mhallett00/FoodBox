import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

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
      <td className="seller-menu item image"><Image src={image}/></td>
      <td className="seller-menu item name">
        <h3>{item_name}</h3>
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
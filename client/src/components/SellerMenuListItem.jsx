import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function SellerMenuListItem() {
  return (
    <tr>
      <td><img src=""/>Image Here</td>
      <td>
        <h3>Mama Beth's Spring Rolls</h3>
        <h5>Single order - 6 pieces</h5>
        <form action="/register method=POST" className="menu-availability">
        <h5>Available to Order?</h5>
        <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
            <label className="custom-control-label yes" >Yes</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
            <label class="custom-control-label" for="customRadio2">No</label>
          </div>
        </form>
        <Button variant="dark" type="submit">
          Edit Item
        </Button>
        <Button variant="danger" type="submit">
          Delete Item 
        </Button>
      </td>
      <td colSpan="2">Food Description Here</td>
      <td>$ price/unit</td>
    </tr>
  );
}
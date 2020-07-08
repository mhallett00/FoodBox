import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SellerMenuListItem from './SellerMenuListItem';

export default function SellerMenuList() {
  return (
    <>
      <div className='seller-menu'>
        <h2>Home_Cook_Name's Menu Items</h2>
      </div>
      <Button variant="dark" type="submit">
        Add Item
      </Button>
      <div className="seller-menu list">
        <Table hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th colSpan="2">Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <SellerMenuListItem/>
          </tbody>
        </Table>
      </div>
    </>
  );
}





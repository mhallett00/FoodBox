import React from "react";
import Table from 'react-bootstrap/Table';

export default function Cook(props) {

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Location</th>
          <th colSpan="2">Name</th>
          <th>Menu Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2 kms away</td>
          <td colSpan="2">Mama Beth's</td>
          <td>
            <ul>
              <li>Spring Rolls</li>
              <li>Roasted Lemongrass and Soy Sauce Chicken</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
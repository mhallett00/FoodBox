import React from 'react';


export default function OHFrag (props) {

  const { item_name, image, item_quantity} = props;
  return (
    <tr>
      <td><img src={image} width="40vw" heigh="30vh"/></td>
      <td>
        <h5>{item_name}</h5>
      </td>
      <td>
        <h5>x {item_quantity}</h5>
      </td>
    </tr>
  );
} 
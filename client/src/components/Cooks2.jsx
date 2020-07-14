import React from "react";
import Button from 'react-bootstrap/Button';


export default function Cook(props) {

  const { cook_fn, cook_ln, uid, onSelect} = props;

  return (
    <tr>
      <td>2 kms away</td>
      <td colSpan="2">{cook_fn} {cook_ln}</td>
      <td>
        <Button variant="dark" type="submit" onClick={onSelect}>
          Order
        </Button>
      </td>
    </tr>
  );
}
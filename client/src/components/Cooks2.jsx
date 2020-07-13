import React from "react";
import Button from 'react-bootstrap/Button';


export default function Cook(props) {

  const { cook_fn, cook_ln, uid, onSelect} = props;

  return (
    <>
        <tr>
          <td>2 kms away</td>
          <td>{cook_fn} {cook_ln}</td>
          {/* <td>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </td> */}
          <Button variant="dark" type="submit" onClick={onSelect}>
            Order
          </Button>

        </tr>
          </>
  );
}
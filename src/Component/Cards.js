import React from "react";
import { Button } from "react-bootstrap";
import './cardstyle.css'
const Cards = ({ elpost }) => {
  return (
    <div>
      <article>
          <h1>{elpost.name}</h1>
          <h2>{elpost.username}</h2>
          <h3>{elpost.email}</h3>
          <h3>{elpost.address.street,elpost.address.zipcode}</h3>
          <h4>{elpost.phone}</h4>
          <h5>{elpost.website}</h5>
          <h5>{elpost.company.name,elpost.company.catchPhrase,elpost.company.bs}</h5>
          <Button variant="primary">Go somewhere</Button>
      </article>
    </div>
  );
};

export default Cards;

import React from "react";

import "./styles.scss";

function Card(props) {
  return (
    <div className="card">
      <img className="card__image" alt={`the pokemon ${props.cardName}`} src={props.cardImg} />
      <p className="card__name">{props.cardName}</p>
      <p className="card__number">{props.cardNumber}</p>
    </div>
  );
}

export default Card;

import React from "react";

import Pikachu from "../../Assets/Images/pikachu.svg";

import "./styles.scss";

function Loading() {
  return (
    <div className="loading">
      Loading...
      <img className="loading__image" src={Pikachu} alt="the Pokemon Pikachu" />
    </div>
  );
}

export default Loading;

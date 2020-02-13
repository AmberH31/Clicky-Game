import React from "react";
import "./Card.css";

const Card = props => {
  console.log(props.id);
  console.log(props.src);
  return (
    <div className="card" onClick={() => props.clickCount(this.props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.src}></img>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./Card.css";

const Card = props => {
  //console.log(props.id);
  // console.log(props);
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.src} />
      </div>
    </div>
  );
};

export default Card;

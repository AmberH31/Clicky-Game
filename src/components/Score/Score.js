import React from "react";
import "./Score.css";

const Score = props => (
  <div className="header">
    <div className="score">
      <div className="title">{props.children}</div>
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  </div>
);

export default Score;

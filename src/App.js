import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper/";
import Score from "./components/Score";
import "./App.css";
import cards from "./cards.json";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  //end game function
  gameOVer = () => {};

  //click add score function
  clickCount = id => {};

  render() {
    return (
      <Wrapper>
        <Score score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Score>
        {this.state.cards.map(cards => (
          <Card
            clickCount={this.clickCount}
            id={cards.id}
            key={cards.id}
            src={cards.src}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

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

  //click and add score function
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id && cards[i].count === 0) {
        cards[i].count = cards[i].count + 1;
        this.setState({ score: this.state.score }, function() {
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5);
        return true;
      } else {
        return this.gameOver();
      }
    });
  };

  //end game function
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
  };

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

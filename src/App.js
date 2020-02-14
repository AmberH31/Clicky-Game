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
    // this.state.cards.find((o, i) => {
    //   if (o.id === id && cards[i].count === 0) {
    //     cards[i].count = cards[i].count + 1;
    //     this.setState({ score: this.state.score }, function() {
    //       console.log(this.state.score);
    //     });
    //     this.state.cards.sort(() => Math.random() - 0.5);
    //     return true;
    //   } else {
    //     return this.gameOver();
    //   }
    // });

    let cardIndex;
    const selectedCard = this.state.cards.find((card, index) => {
      if (card.id === id) {
        cardIndex = index;
        return true;
      } else {
        return false;
      }
    });
    if (selectedCard && cardIndex) {
      if (this.state.cards[cardIndex].count > 0) {
        this.gameOver();
      } else if (this.state.cards[cardIndex].count === 0) {
        console.log("zero count");
        //if you pass a callback func into setState, the only argument it gets is a copy of current state
        this.setState(state => {
          state.cards[cardIndex].count += 1;
          state.score += 1;
          state.highscore = Math.max(state.highscore, state.score);
          //Array.sort is doing in-place sorting, which modifies the original array(not pure)
          state.cards.sort(() => Math.random() - 0.5);
          console.log(state);
          return state;
        });
      }
    }
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

import React, { Component} from "react";
import Header from './Header';
import "./App.css"

const WinMessage = () => <div>You Win!</div>
const LoseMessage = () => <div>You Lose!</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: "",
      randomValue: Math.floor(Math.random() * 100),
      win: false,
      streak: 0,
      attempted: false
    };
    console.log(`Hidden Number: ${this.state.randomValue}\n`);
  }

  updateGuess = event => {
    console.log(`Hidden Number: ${this.state.randomValue}`);
    this.setState({ guess: event.target.value})
  }

  // checkWin = event => {
  //   event.preventDefault();
  //   // DONE: check if guess equal to randomValue and update this.state.win
  //   if (this.state.guess === this.state.randomValue) {
  //     const wins = this.state.streak;
  //     this.resetRandomValue();
  //     this.clearInput();
  //     this.setState(
  //       {
  //         win: true, 
  //         streak: wins + 1,
  //       });
  //   } else {
  //     this.clearInput();
  //     this.setState({
  //       win: false, 
  //       streak: 0,
  //       attempted: true,
  //     });
  //   }
  // }

  // clearInput = () => {
  //   document.getElementById("guessForm").reset();
  // }

  // resetRandomValue = event => {
  //   console.log("Random value: " + this.state.randomValue);
  //   this.setState(
  //       {
  //         randomValue : Math.floor(Math.random() * 100),
  //         win: false,
  //         streak: this.streak
  //       }
  //     );
  // }

  render() {
    return (

      <div className="App">
        <Header />
        {/* <div> You have guessed correctly {this.state.streak} times in a row! </div> */}
        <div>Current Random Value: {this.state.randomValue}</div>
        <form id="guessForm">
          {/* <input type="submit" value="Pick a new hidden number." onClick={this.resetRandomValue}/> */}
          <label>
            Guess the hidden number:
            <input
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.checkWin} />
        </form>
        {this.state.win && <WinMessage/>}
        {this.state.attempted && !this.state.win && <LoseMessage/>}
      </div>
    )
  }
}

export default App
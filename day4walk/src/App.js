import React, { Component} from "react";
import Header from './Header';
import "./App.css"

const WinMessage = () => <div id="winMessage" class="message">You Win!</div>
const LoseMessage = () => <div id="loseMessage" class="message">You Lose!</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: "",
      randomValue: Math.floor(Math.random() * 100),
      attempted: false,
      streak: 0
    };
  }

  updateGuess = event => {
    this.setState({ guess: event.target.value})
  }

  clearInput = event => {
    document.getElementById("guessForm").reset();
  }

  newRandomNumber = event => {
    this.setState( 
      {
        randomValue: Math.floor(Math.random() * 100)
      }
    )
  }

  checkWin = event => {
    event.preventDefault();
    const wins = this.state.streak;
    if (this.state.guess == this.state.randomValue) {
      this.clearInput();
      this.newRandomNumber();
      this.setState(
        {
          win: true,
          attempted: true,
          streak: wins + 1
        }
      )
    }
    else {
      this.clearInput();
      this.setState(
        {
          win: false,
          attempted: true, 
          streak: 0
        }
      )
    }
  }

  render() {
    return (

      <div className="App">
        <Header />
        <div>Current Secret Number: {this.state.randomValue}</div>
        <div id="streakMessage" class="message"> Current # Wins in A Row: {this.state.streak}</div>
        <form id="guessForm">
          <input type="button" value="Get a New Secret Number!" onClick={this.newRandomNumber}/>
          <label>
            Guess the secret number:
            <input
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.checkWin}/>
        </form>
        <div>
          {this.state.win && <WinMessage/>}
          {!this.state.win && this.state.attempted && <LoseMessage/>}
        </div>
      </div>
    )
  }
}

export default App
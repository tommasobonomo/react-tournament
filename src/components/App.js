import React, {Component} from 'react';

import End from './End';
import Settings from './start/Settings';
import Score from './Score';
import Table from './Table';
import Player from "../Player.js";

class App extends Component {

  constructor(props) {
    super(props);
    var players = [new Player("1"), new Player("2"), new Player("3")];
    this.state = {
      "players": players,
      "staticPlayers":[],
      "numberPlayers": 3,
      "start": true,
      "end": false,
      "winPoints":3
    };
  }

  // number input handler
  handleNumbers(event) {
    var newNumber = event.target.value === "" ?
                    0 : parseInt(event.target.value,10);
    if (newNumber < 0) {
      window.alert("Can't have negative number of players!")
    } else {
      var tmp = this.state.players;
      if (this.state.numberPlayers < newNumber) {
        for (var i = 1; i <= newNumber-this.state.numberPlayers; i++) {
          var name = parseInt(this.state.numberPlayers+i, 10);
          tmp.push(new Player(name));
        }
      } else if (this.state.numberPlayers > newNumber) {
        for (var k = 0; k < this.state.numberPlayers - newNumber; k++) {
          tmp.pop();
        }
      }
      this.setState({
        "numberPlayers":newNumber,
        "players":tmp
      })
    }
  }

  // players' name input handler
  handlePlayers(event) {
    var players = this.state.players;
    var pos = event.target.id;
    players[pos].constructor(event.target.value);

    this.setState({players});
  }

  // win points input handler
  handleWinPoints(event) {
    if (event.target.value <= 0) {
      window.alert("Win points cannot be zero or negative");
    } else {
      this.setState({"winPoints": parseInt(event.target.value,10)});
    }
  }

  // sets the start element in state to false
  setStartFalse() {
    if (this.state.numberPlayers < 3) {
      window.alert("You need to have 3 or more players!");
    } else {
      const tmp = this.state.players.slice();
      this.setState({
       "start" : false,
       "staticPlayers":tmp
      });
    }
  }

  // score input handler
  handleScore(homeP, awayP,scoreH,scoreA) {
    if (awayP === null || awayP === undefined || homeP === awayP) {
      window.alert("Select an away player!");
    } else {
      var player1;
      var player2;
      const n = this.state.numberPlayers;
      var players = this.state.players;

      for (var j=0; j<n; j++) {
        if (players[j].name === homeP)
          player1=players[j];
        else if (players[j].name === awayP)
          player2=players[j];
      }

      player1.gamesPlayed++;
      player2.gamesPlayed++;

      const score1 = scoreH;
      const score2 = scoreA;

      if (score1 > score2) {
        player1.points += this.state.winPoints;
        player1.gamesWon++;
        player2.gamesLost++;
      } else if (score1 < score2) {
        player2.points += this.state.winPoints;
        player2.gamesWon++;
        player1.gamesLost++;
      } else {
        player1.points++;
        player2.points++;
        player1.gamesDrawn++;
        player2.gamesDrawn++;
      }

      this.setState({
        "players" : players,
      });
    }
  }

  // sets this.state.end to true, triggering renders of other components
  endGame() {
    this.setState({
      "end": true,
    })
  }

  // sets the whole state to it's initial values
  newGame() {
    this.setState({
      "players": [new Player("1"), new Player("2"), new Player("3")],
      "staticPlayers": [],
      "numberPlayers": 3,
      "start": true,
      "end": false,
      "disabledPlayer": null,
      "winPoints":3
    });
  }

  // render method with various conditions depending on the state
  render() {
    var component;
    if (this.state.end === true) {
      component =
      <div className="w3-row">
        <div className="w3-third">
          <End
            players={this.state.players}
            newGame={this.newGame.bind(this)}
          />
        </div>
        <div className="w3-twothird w3-responsive">
          <Table
            players={this.state.players}
            numberPlayers={this.state.numberPlayers}
          />
        </div>
      </div>
    } else if (this.state.start === false) {
      component =
        <div className="w3-row">
          <div className="w3-third">
            <Score
               players={this.state.staticPlayers}
               numberPlayers={this.state.numberPlayers}
               handleScore={this.handleScore.bind(this)}
               endGame={this.endGame.bind(this)}
             />
          </div>
          <div className="w3-twothird w3-responsive">
            <Table
              players={this.state.players}
              numberPlayers={this.state.numberPlayers}
            />
          </div>
        </div>
    } else {
      component =
        <div className="w3-row">
          <Settings
            handleNumbers={this.handleNumbers.bind(this)}
            numberPlayers={this.state.numberPlayers}
            handlePlayers={this.handlePlayers.bind(this)}
            players={this.state.players}
            winPoints={this.state.winPoints}
            handleWinPoints={this.handleWinPoints.bind(this)}
            setStartFalse={this.setStartFalse.bind(this)}
          />
        </div>;
    }
    return(component);
  }
}


export default App;

import React, {Component} from 'react';
import Start from './start/Start';
import Score from './Score';
import Table from './Table';
import './App.css';

class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.gamesPlayed = 0;
    this.gamesWon = 0;
    this.gamesLost = 0;
    this.gamesDrawn = 0;
  }
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      "players": [],
      "numberPlayers": 0,
      "numberEntered": false,
      "start": true,
    };
  }

  handleNumbers() {
    const number = document.getElementById("number").value;
    this.setState({
      "numberPlayers": number,
      "numberEntered": true,
    })
  }

  handlePlayers() {
    var players = [];
    const n = this.state.numberPlayers;
    for (var i=1; i<=n; i++) {
      players.push(Player(document.getElementById("i"+i).value));
    }
    console.log(players);
    this.setState({
      "players": players,
      "start": false
    })
  }

  render() {
    var component;
    if (this.state.start === false) {
      component =
        <div>
          <div className="left">
            <Score
               players={this.state.players}
               
             />
          </div>
          <div className="right">
            <Table/>
          </div>
        </div>
      ;
    } else {
      component =
        <div>
          <Start
            handleNumbers={this.handleNumbers.bind(this)}
            numberEntered={this.state.numberEntered}
            numberPlayers={this.state.numberPlayers}
            handlePlayers={this.handlePlayers.bind(this)}
          />
        </div>;
    }
    return(component);
  }
}


export default App;

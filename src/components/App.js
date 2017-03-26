import React, {Component} from 'react';

import End from './End';
import Start from './start/Start';
import Score from './Score';
import Table from './Table';

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
      "end": false
    };
  }

  compare(a,b) {
    var res;
    if (a.points > b.points) {
      res = -1;
    } else if (a.points < b.points) {
      res = 1;
    } else {
      if (a.gamesWon > b.gamesWon) {
        res = -1;
      } else if (a.gamesWon < b.gamesWon) {
        res = 1;
      } else {
        if (a.gamesLost < b.gamesLost) {
          res = -1;
        } else if (a.gamesLost > b.gamesLost) {
          res = 1;
        } else {
          res = 0;
        }
      }
    }

    return res;
  }

  sortTable(tmp) {
    tmp.sort(this.compare);
    this.setState({
      "players": tmp,
    });
  }

  handleNumbers() {
    const number = document.getElementById("number").value;

    // number control
    if (number <= 2) {
      window.alert("You need to have 3 or more players");
      const n = document.getElementById("number");
      n.value = null;
      n.focus();
    } else {
      this.setState({
        "numberPlayers": number,
        "numberEntered": true,
      })
    }
  }

  handlePlayers() {
    var players = [];
    const n = this.state.numberPlayers;
    for (var i=1; i<=n; i++) {
      players.push(new Player(document.getElementById("i"+i).value));
    }
    this.setState({
      "players": players,
      "start": false
    })
  }

  handleScore() {

    const player1 = document.getElementById("homePlayer");
    const player2 = document.getElementById("awayPlayer");

    player1.focus();

    if (player1.value === player2.value) {
      window.alert("Players can't play against themselves!");
      document.getElementById("homeScore").value = null;
      document.getElementById("awayScore").value = null;
    } else {

      var tmp = this.state.players.slice();
      var homePos;
      var awayPos;

      for (var i=0; i<this.state.numberPlayers; i++) {
        if (tmp[i].name === player1.value) {
          homePos = i;
        }
        if (tmp[i].name === player2.value) {
          awayPos = i;
        }
      }

      tmp[homePos].gamesPlayed ++;
      tmp[awayPos].gamesPlayed ++;

      const score1 = parseInt(document.getElementById("homeScore").value,10);
      const score2 = parseInt(document.getElementById("awayScore").value,10);

      var homeWin;
      var draw;

      if (score1 > score2) {
        homeWin = true;
      } else if (score1 < score2) {
        homeWin = false;
      } else {
        draw = true;
      }


      if (draw) {
        tmp[homePos].points++;
        tmp[awayPos].points++;
        tmp[homePos].gamesDrawn++;
        tmp[awayPos].gamesDrawn++;
      } else {
        if (homeWin) {
          tmp[homePos].points += 3;
          tmp[homePos].gamesWon++;
          tmp[awayPos].gamesLost++;
        } else if (!homeWin) {
          tmp[awayPos].points += 3;
          tmp[awayPos].gamesWon++;
          tmp[homePos].gamesLost++;
        }
      }

      this.sortTable(tmp);

      this.setState({
        "players" : tmp,
      });

    }
  }

  endGame() {
    this.setState({
      "end": true,
    })
  }

  newGame() {
    // TODO: better implement the restart feature
    // this.setState(this.getInitialState());

    location.reload();
  }

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
        <div className="w3-twothird">
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
               players={this.state.players}
               numberPlayers={this.state.numberPlayers}
               handleScore={this.handleScore.bind(this)}
               endGame={this.endGame.bind(this)}
             />
          </div>
          <div className="w3-twothird">
            <Table
              players={this.state.players}
              numberPlayers={this.state.numberPlayers}
            />
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

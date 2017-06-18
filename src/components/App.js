import React, {Component} from 'react';

import End from './End';
import Settings from './start/Settings';
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
      "staticPlayers": [],
      "numberPlayers": 3,
      "start": true,
      "end": false,
      "disabledPlayer": null,
      "winPoints":3
    };
    this.initialState = this.state;
  }

  // util function to compare the different Player objects
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

  // sorts this.state.players using the compare function
  sortTable(tmp) {
    tmp.sort(this.compare);
    this.setState({
      "players": tmp,
    });
  }

  // number input handler
  handleNumbers(event) {
    // number control
    if (event.target.value <= 2) {
      window.alert("You need to have 3 or more players");
    } else {
      this.setState({
        "numberPlayers":event.target.value
      })
    }
  }

  // players' name input handler
  handlePlayers(event) {
    var players = this.state.players;
    var pos = event.target.id;

    if (players[pos] === undefined) {
      players[pos] = new Player(event.target.value);
    } else {
      players[pos].constructor(event.target.value);
    }

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
    this.setState({
     "start" : false,
     "staticPlayers": this.state.players
    });
  }

  // score input handler
  handleScore() {

    var player1;
    var player2;
    var disabledPlayer;
    var i, tmp;
    const n = this.state.numberPlayers;

    // Checks what players have been selected
    var stop = false;
    for (i=0; i<n && !stop; i++) {
      tmp = document.getElementById("homePlayer"+i);
      if (tmp.checked) {
        player1 = tmp;
        stop = true;
        disabledPlayer = document.getElementById("awayPlayer"+i);
      }
    }
    stop = false;
    for (i=0; i<n && !stop; i++) {
      tmp = document.getElementById("awayPlayer"+i);
      if (tmp.checked) {
        player2 = tmp;
        stop = true;
      }
    }



    tmp = this.state.players.slice();
    var homePos;
    var awayPos;

    // gets position in Players' array for homePlayer and awayPlayer
    for (i=0; i<n; i++) {
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

    // checks different scenarios (home win, away win or draw)
    if (score1 > score2) {
      homeWin = true;
    } else if (score1 < score2) {
      homeWin = false;
    } else {
      draw = true;
    }

    // updates players according to the different scenarios
    if (draw) {
      tmp[homePos].points++;
      tmp[awayPos].points++;
      tmp[homePos].gamesDrawn++;
      tmp[awayPos].gamesDrawn++;
    } else {
      if (homeWin) {
        tmp[homePos].points += this.state.winPoints;
        tmp[homePos].gamesWon++;
        tmp[awayPos].gamesLost++;
      } else if (!homeWin) {
        tmp[awayPos].points += this.state.winPoints;
        tmp[awayPos].gamesWon++;
        tmp[homePos].gamesLost++;
      }
    }

    this.sortTable(tmp);

    // resets the radio buttons to unchecked
    player1.checked = false;
    player2.checked = false;

    // renables the disabled radio button
    disabledPlayer.disabled = false;

    // resets the score inputs
    document.getElementById("homeScore").value = null;
    document.getElementById("awayScore").value = null;

    this.setState({
      "players" : tmp,
      "disabledPlayer": null
    });

  }


  // disables the radio button for the away player who's name is
  // this.state.disabledPlayer
  disableAway(e,homeOrAway) {
    var tmp = e.target;
    if (homeOrAway === "home") {
      this.setState({
        "disabledPlayer": tmp.value
      })
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
    this.setState(this.initialState);
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
               disableAway={this.disableAway.bind(this)}
               disabledPlayer={this.state.disabledPlayer}
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

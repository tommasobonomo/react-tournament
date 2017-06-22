import React, {Component} from 'react';
import "../css/Table.css";

function compare(a,b) {
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

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "players": props.players,
      "numberPlayers": props.numberPlayers
    }
  }

  sortPlayers() {
    this.state.players.sort(compare);
  }

  render() {
    var lines = [];
    this.sortPlayers();
    for (var i=0; i<this.state.numberPlayers; i++) {
      lines.push(
        <tr key={"r"+i}>
          <td>{this.state.players[i].name}</td>
          <td>{this.state.players[i].points}</td>
          <td>{this.state.players[i].gamesPlayed}</td>
          <td>{this.state.players[i].gamesWon}</td>
          <td>{this.state.players[i].gamesLost}</td>
          <td>{this.state.players[i].gamesDrawn}</td>
        </tr>
      );
    }
    return (
      <table className="w3-table-all w3-hoverable w3-card-4 w3-margin-top">
        <thead>
          <tr className="w3-light-grey header">
            <td>Name</td>
            <td>Points</td>
            <td>Played</td>
            <td>Won</td>
            <td>Lost</td>
            <td>Drawn</td>
          </tr>
        </thead>
        <tbody>
          {lines}
        </tbody>
      </table>
    );
  }
}
export default Table;

import React from 'react';
import "../css/Table.css";

const scoreLine = (i,players) => {
  const cP = players[i]; //current player
  return (
    <tr key={"r"+i}>
      <td>
        {cP.name}
      </td>
      <td>
        {cP.points}
      </td>
      <td>
        {cP.gamesPlayed}
      </td>
      <td>
        {cP.gamesWon}
      </td>
      <td>
        {cP.gamesLost}
      </td>
      <td>
        {cP.gamesDrawn}
      </td>
    </tr>
  );
}

const Table = (props) => {

  var inputs = [];
  const n = props.numberPlayers;
  const players = sortTable(props.players);
  for (var i=0; i<n; i++) {
    inputs.push(scoreLine(i,players));
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
      {inputs}
    </tbody></table>
  );
}

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

function sortTable(players) {
  players.sort(compare);
  return players;
}

export default Table;

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
  for (var i=0; i<n; i++) {
    inputs.push(scoreLine(i,props.players));
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


export default Table;

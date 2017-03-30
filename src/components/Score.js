import React from 'react';

const playerSelect = (homeOrAway,players,n) => {

  // TODO: implement check that disables selction of same player in both fields

  var output = [];

  for (var i=0; i<n; i++) {
    output.push(
      <option key={"o"+i} value={players[i].name}>
        {players[i].name}
      </option>
    )
  }


  return (
    <select
      className="w3-select w3-half w3-light-grey w3-border"
      id={homeOrAway+"Player"}
    >
      {output}
    </select>
  );
}

const Score = (props) => {

  return(
    <div className="w3-margin">
      <div className="w3-card-4">
        <div className="w3-row">
          {playerSelect("home",props.players,props.numberPlayers)}
          {playerSelect("away",props.players,props.numberPlayers)}
        </div>
        <div className="w3-row">
          <input
            className="w3-input w3-half w3-border"
            type="number"
            id="homeScore"
          />
          <input
            className="w3-input w3-half w3-border"
            type="number"
            id="awayScore"
          />
        </div>
      </div>
      <div className="tooltip">
        <button
          className="w3-margin-top w3-circle w3-blue-gray"
          onClick={props.handleScore}
          id="scoreSubmit"
        >
          <i className="material-icons">arrow_forward</i>
        </button>
        <span className="tooltiptext">Enter</span>
      </div>
      <div className="tooltip">
        <button
          className="w3-margin-top w3-circle w3-blue-gray"
          onClick={props.endGame}
          id="endGame"
        >
          <i className="material-icons">clear</i>
        </button>
        <span className="tooltiptext">End</span>
      </div>
    </div>
  );
}

export default Score;

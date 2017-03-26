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
      <button
        className="w3-margin-top"
        onClick={props.handleScore}
        id="scoreSubmit"
      >
        Enter
      </button>
      <button
        className="w3-margin-top"
        onClick={props.endGame}
        id="endGame"
      >
        End
      </button>
    </div>
  );
}

export default Score;

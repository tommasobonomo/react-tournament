import React from 'react';

const playerSelect = (homeOrAway,players,n,disableAway,disabledPlayer) => {

  var output = [];

  for (var i=0; i<n; i++) {
    output.push(

      <p key={"paragraph"+i}>
        <input
          type="radio"
          key={"o"+i}
          name={homeOrAway+"players"}
          id={homeOrAway + "Player" + i}
          value={players[i].name}
          className="w3-radio w3-margin-right"
          onClick={(e) => disableAway(e,homeOrAway)}
        />
        <label>{players[i].name}</label>

      </p>
    );

    if (disabledPlayer !== null)
      if (disabledPlayer === players[i].name) {
        document.getElementById("awayPlayer" + i).disabled = true;
        document.getElementById("awayPlayer" + i).checked = false;
      } else
        document.getElementById("awayPlayer" + i).disabled = false;
  }

  return (
    <div
      className="w3-half w3-light-grey w3-border w3-padding"
    >
      {output}
    </div>
  );
}

const Score = (props) => {
  return(
    <div className="w3-margin">
      <div className="w3-card-4">
        <div className="w3-row">
          {playerSelect(
            "home",props.players,props.numberPlayers,
            props.disableAway,props.disabledPlayer
          )}
          {playerSelect(
            "away",props.players,props.numberPlayers,
            props.disableAway,props.disabledPlayer
          )}
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
      <div className="w3-bar">
        <button
          className="w3-button w3-blue-gray w3-large
          w3-round w3-card-4 w3-margin-right"
          onClick={props.handleScore}
          id="scoreSubmit"
        >
          Submit
        </button>
        <button
          className="w3-button w3-blue-gray w3-large
          w3-round w3-card-4 w3-margin"
          onClick={props.endGame}
          id="endGame"
        >
          End
        </button>
      </div>
    </div>
  );
}

export default Score;

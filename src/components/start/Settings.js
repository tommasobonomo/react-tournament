import React from "react";
import "../../css/Settings.css"

const playerInputs = (n,handlePlayers,players) => {
  var inputs = [];
  if (n > 1000) {
    window.alert("You can't have more than 1000 players!");
  } else {
    for (var i = 0; i<n; i++) {
      inputs.push(
        <p key={"p"+i} id={"p"+i}>
          <input
            placeholder={"Player "+(i+1)}
            key={"i"+i}
            id={i}
            onChange={handlePlayers}
            value={players[i].name}
          />
        </p>
      );
    }
  }
  return inputs;
}

const Settings = (props) => {
  return (
    <div>
      <div className="w3-container w3-row">
        <div className="w3-third">
          <p>How many points for a victory?</p>
          <p>
            <input
              className="numberInput"
              value={props.winPoints}
              onChange={props.handleWinPoints}
              type="number"
              autoFocus
            />
          </p>
        </div>
        <div className="w3-third">
          <p>How many players are there?</p>
          <p><input
          className="numberInput"
          value={props.numberPlayers}
          onChange={props.handleNumbers}
          type="number"
          /></p>
        </div>
        <div className="w3-third">
          <p> Players: </p>
          {playerInputs(props.numberPlayers,props.handlePlayers,props.players)}
        </div>
      </div>
      <div className="w3-center">
        <button
          className="w3-button w3-blue-grey w3-large w3-round w3-card-4"
          onClick={props.setStartFalse}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Settings;

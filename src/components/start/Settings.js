import React from "react";


const playerInputs = (n,handlePlayers) => {
  var inputs = [];
  if (n>0 && n<50) {
    for (var i = 0; i<n; i++) {
      inputs.push(
        <p key={"p"+i} id={"p"+i}>
          <input
            placeholder={"Player "+(i+1)}
            key={"i"+i}
            id={i}
            onChange={handlePlayers}
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
      <p>How many players are there?</p>
      <p><input
        value={props.numberPlayers}
        onChange={props.handleNumbers}
        type="number"
        autoFocus
      /> (maximum of 50)</p>
      <div><p> Players: </p>
        {playerInputs(props.numberPlayers,props.handlePlayers)}
      </div>
    </div>
  );
}

export default Settings;

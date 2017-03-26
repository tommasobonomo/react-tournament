import React from "react";

const Names = (props) => {
  const n = props.numberPlayers;
  var inputs = [];
  inputs.push(
      <p key={"p"+1} id={"p"+1}>
        <input placeholder={"Player "+1} key={"i"+1} id={"i"+1} autoFocus/>
      </p>
    );
  for (var i=2; i<=n; i++) {
    inputs.push(
      <p key={"p"+i} id={"p"+i}>
        <input placeholder={"Player "+i} key={"i"+i} id={"i"+i}/>
      </p>
    )
  }
  inputs.push(
    <button onClick={props.handlePlayers} key={"playerButton"}>Enter</button>
  );
  return (<div>{inputs}</div>);
}

export default Names;

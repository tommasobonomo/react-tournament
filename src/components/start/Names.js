import React, {Component} from "react";

const Names = (props) => {
  const n = props.numberPlayers;
  var inputs = [];
  for (var i=1; i<=n; i++) {
    inputs.push(<p key={"p"+i}><input placeholder={"Player "+i} key={"i"+i}/></p>)
  }
  inputs.push(
    <button onClick={props.handlePlayers} key={"playerButton"}>Enter</button>
  );
  return (<div>{inputs}</div>);
}

export default Names;

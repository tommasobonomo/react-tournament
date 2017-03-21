import React, {Component} from "react";

const nameInput = (i) => {
  return (<input placeholder={"Player "+i} id={"p"+i}/>)
}

const Names = (props) => {
  var namesInputs;
  for (var i=0; i< props.numberPlayers; i++) {
    namesInputs+= nameInput(i);
  }

  namesInputs+= <button onClick={props.handlePlayers}>Enter</button>;

  var component = <div> {namesInputs} </div>;

  return (component);
}

export default Names;

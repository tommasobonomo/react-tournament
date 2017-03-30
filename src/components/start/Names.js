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
    <div className="tooltip" key={"playerButton"}>
      <button
        onClick={props.handlePlayers}
        className="w3-circle w3-blue-gray "
      >
        <i className="material-icons">arrow_forward</i>
      </button>
      <span className="tooltiptext">Enter</span>
    </div>
  );
  return (<div>{inputs}</div>);
}

export default Names;

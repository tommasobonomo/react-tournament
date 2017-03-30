import React from "react";

const End = (props) => {
  return(
    <div className="w3-container">
      <h3>Congratulations, {props.players[0].name}, you won the game!</h3>
      <p>Do you want to start a new game?</p>
      <div className="tooltip">
        <button
          id="newGame"
          onClick={props.newGame}
          className="w3-margin-top w3-circle w3-blue-gray"
          autoFocus
        >
          <i className="material-icons">arrow_forward</i>
        </button>
        <span className="tooltiptext">Enter</span>
      </div>
    </div>
  )
}

export default End;

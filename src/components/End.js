import React from "react";

const End = (props) => {
  return(
    <div className="w3-container">
      <h3>Congratulations, {props.players[0].name}, you won the game!</h3>
      <p>Do you want to start a new game?</p>
      <button
        id="newGame"
        onClick={props.newGame}
        className="w3-margin-top w3-button
        w3-blue-gray w3-large w3-round w3-card-4"
        autoFocus
      >
        Restart
      </button>
    </div>
  )
}

export default End;

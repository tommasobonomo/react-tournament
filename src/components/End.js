import React from "react";

const End = (props) => {
  return(
    <div className="w3-container">
      <h3>Congratulations, {props.players[0].name}, you won the game!</h3>
      <p>Do you want to start a new game?</p>
      <button id="newGame" onClick={props.newGame} autoFocus>Go</button>
    </div>
  )
}

export default End;

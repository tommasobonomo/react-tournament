import React from "react";

const Numbers = (props) => {
  return(
    <div>
      <p>How many players are there?</p>
      <input id="number" type="number"/>
      <button onClick={props.handleNumbers}>
        Enter
      </button>
    </div>
  )
}

export default Numbers;

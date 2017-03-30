import React from "react";

const Numbers = (props) => {
  return(
    <div>
      <p>How many players are there? <br/>
      <input id="number" type="number" autoFocus/>
      </p>
      <div className="tooltip">
        <button
          onClick={props.handleNumbers}
          className="w3-circle w3-blue-gray"
        >
          <i className="material-icons">arrow_forward</i>
        </button>
        <span className="tooltiptext">Enter</span>
      </div>
    </div>
  )
}

export default Numbers;

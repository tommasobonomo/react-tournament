import React from "react";

import Names from "./Names.js";
import Numbers from "./Numbers.js"

const Start = (props) => {
  var component;
  if(props.numberEntered === false)
    component=
        <Numbers handleNumbers={props.handleNumbers}/>
  else {
      component =
        <Names numberPlayers={props.numberPlayers}
          handlePlayers={props.handlePlayers}/>
  }
  return(<div>{component}</div>);
}

export default Start;

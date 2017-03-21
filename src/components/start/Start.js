import React, {Component} from "react";

import Names from "./Names.js";
import Numbers from "./Numbers.js"

const Start = (props) => {
  var component;
  if(props.numberEntered == false)
    component=
      <div>
        <Numbers handleNumbers={props.handleNumbers}/>
      </div>;
  else {
    component=
      <div>
        <Names numberPlayers={props.numberPlayers}/>
      </div>;
  }
  return(component);
}

export default Start;

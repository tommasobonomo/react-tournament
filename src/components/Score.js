import React, {Component} from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "homePlayer":props.players[0].name,
      "awayPlayer":props.players[1].name,
      "disabledPlayer":props.players[0].name,
      "homeScore":0,
      "awayScore":0
    }
  }

  handleSelection(event,homeOrAway) {
    if (homeOrAway === "home") {
      if (this.state.awayPlayer === event.target.value) {
        // console.log("disabled "+event.target.value);
        document.getElementById("awayPlayer"+event.target.value).checked = false;
        this.setState({
          "awayPlayer":null
        })
      }
      this.setState({
        "disabledPlayer":event.target.value,
        "homePlayer":event.target.value,
      });
    } else {
      this.setState({
        "awayPlayer":event.target.value
      })
    }
  }

  handleScoreChange(event) {
    var tmpScore = parseInt(event.target.value,10);
    if (tmpScore >= 0) {
      if (event.target.id === "homeScore")
        this.setState({"homeScore":tmpScore});
      else if (event.target.id === "awayScore")
        this.setState({"awayScore":tmpScore});
    }
  }

  playerSelect (homeOrAway) {

    var output = [];
    const players = this.props.players;
    const n = this.props.numberPlayers;

    for (var i=0; i<n; i++) {
      var checkedOrNot = false;
      if ((i===0 && homeOrAway==="home") || (i===1 && homeOrAway==="away")) {
        checkedOrNot = true;
      }
      output.push(
        <p key={"paragraph"+i}>
          <input
            type="radio"
            key={"o"+i}
            name={homeOrAway + "Players"}
            id={homeOrAway + "Player" + players[i].name}
            value={players[i].name}
            className="w3-radio w3-margin-right"
            onClick={
              (event) => this.handleSelection(event,homeOrAway)
            }
            disabled={players[i].name === this.state.disabledPlayer &&
              homeOrAway === "away"}
            defaultChecked={checkedOrNot}
          />
          <label>{players[i].name}</label>
        </p>
      );
    }
    return (
      <div
        className="w3-half w3-light-grey w3-border w3-padding"
      >
        {output}
      </div>
    );
  }

  render() {
    return(
      <div className="w3-margin">
        <div className="w3-card-4">
          <div className="w3-row">
            {this.playerSelect("home")}
            {this.playerSelect("away")}
          </div>
          <div className="w3-row">
            <input
              className="w3-input w3-half w3-border"
              type="number"
              id="homeScore"
              value={this.state.homeScore}
              onChange={this.handleScoreChange.bind(this)}
            />
            <input
              className="w3-input w3-half w3-border"
              type="number"
              id="awayScore"
              value={this.state.awayScore}
              onChange={this.handleScoreChange.bind(this)}
            />
          </div>
        </div>
        <div className="w3-bar">
          <button
            className="w3-button w3-blue-gray w3-large
            w3-round w3-card-4 w3-margin-right"
            onClick={()=> {
              this.props.handleScore(this.state.homePlayer,this.state.awayPlayer,
                this.state.homeScore,this.state.awayScore)
            }}
            id="scoreSubmit"
          >
            Submit
          </button>
          <button
            className="w3-button w3-blue-gray w3-large
            w3-round w3-card-4 w3-margin"
            onClick={this.props.endGame}
            id="endGame"
          >
            End
          </button>
        </div>
      </div>
    );
  }
}

export default Score;

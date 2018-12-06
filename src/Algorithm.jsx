import React, { Component } from "react";
import Timer from "./Timer";
import Drills from "./Drills";

class Algorithm extends Component {
  state = {
    drills: false,
    timer: false
  };

  handleDrills = () => {
    this.setState({
      timer: false,
      drills: true
    });
  };

  handleTimer = () => {
    this.setState({
      timer: true,
      drills: false
    });
  };

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h3 className="title is-3">
          You're currently viewing {this.props.image}
        </h3>
        <p>Pick your preferred algorithm and a session type</p>
        <p>Algorithms</p>
        <select>
          {this.props.data.alg.map(item => {
            return <option>{item}</option>;
          })}
        </select>
        <p>Session Type</p>
        <button onClick={this.handleDrills}>Drills</button>
        <button onClick={this.handleTimer}>Time Based</button>
        {this.state.timer && <Timer />}
        {this.state.drills && <Drills />}
        <button onClick={this.props.goBack}>Back</button>
      </div>
    );
  }
}

export default Algorithm;

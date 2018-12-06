import React, { Component } from "react";
import Timer from "./Timer";
import Drills from "./Drills";

class Algorithm extends Component {
  state = {
    drills: false,
    timer: false,
    alg: ""
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

  handleChange = item => {
    console.log(item.target.innerText);

    this.setState({
      alg: item.target.innerText
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
        <p>Please pick an algorithm below</p>
        {this.state.alg !== "" && <p>You picked {this.state.alg}</p>}
        <ul>
          {this.props.data.alg.map(item => {
            console.log(item);

            return (
              <li onClick={item => this.handleChange(item)} name={item}>
                {item}
              </li>
            );
          })}
        </ul>
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

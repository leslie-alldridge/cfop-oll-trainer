import React, { Component } from "react";
import { Link } from "react-router-dom";

import Stopwatch from "./Stopwatch";

class Drills extends Component {
  state = {
    quantity: 0,
    begin: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      begin: true
    });
  };

  handleChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  handleRound = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  render() {
    return (
      <div>
        <p>Welcome to Drills</p>
        <form>
          <input onChange={this.handleChange} type="number" />
          <input
            onClick={this.handleSubmit}
            type="Submit"
            value="Start Drills"
          />
        </form>
        {this.state.begin && (
          <div>
            <h3>Rounds remaining {this.state.quantity}</h3>
            <Stopwatch handleRound={this.handleRound} />
          </div>
        )}
        <Link onClick={this.goBack} to="/">
          Back to OLLs
        </Link>
      </div>
    );
  }
}

export default Drills;

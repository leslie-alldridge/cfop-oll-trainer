import React, { Component } from "react";

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
          </div>
        )}
      </div>
    );
  }
}

export default Drills;

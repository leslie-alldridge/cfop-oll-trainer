import React, { Component } from "react";
import Timer from "./Timer";
import Drills from "./Drills";

class Algorithm extends Component {
  state = {
    drills: false,
    timer: false,
    alg: "",
    selected: false,
    hide: false
  };

  handleDrills = () => {
    this.setState({
      timer: false,
      drills: true,
      hide: true
    });
  };

  handleTimer = () => {
    this.setState({
      timer: true,
      drills: false,
      hide: true
    });
  };

  handleChange = item => {
    this.setState({
      selected: true,
      alg: item.target.innerText
    });
  };

  goBack = () => {
    this.setState({
      drills: false,
      timer: false,
      alg: "",
      selected: false,
      hide: false
    });
  };

  render() {
    return (
      <div>
        {this.state.hide === false ? (
          <React.Fragment>
            <h3 className="title is-3">
              Currently Viewing: {this.props.image}
            </h3>
            <p>
              <b>Pick your preferred algorithm and a session type</b>
            </p>
            <br />
            <p>Algorithms</p>
            {this.state.alg !== "" && (
              <p>
                <b>Selected: {this.state.alg}</b>
              </p>
            )}
            <ul>
              {this.props.data.alg.map(item => {
                return (
                  <li
                    className={"button is-primary"}
                    onClick={item => this.handleChange(item)}
                    name={item}
                    id="liAlgs"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <p>Session Type</p>

            {this.state.selected !== false && (
              <button
                id="buttonSession"
                className={"button is-link"}
                onClick={this.handleDrills}
              >
                Drills
              </button>
            )}
            {this.state.selected !== false && (
              <button
                id="buttonSession"
                className={"button is-link"}
                onClick={this.handleTimer}
              >
                Time Based
              </button>
            )}
            {this.state.timer && <Timer />}
            {this.state.drills && <Drills />}
            <button
              id="buttonSession"
              className={"button is-link"}
              onClick={this.props.goBack}
            >
              Back
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.state.drills && <Drills goBack={this.goBack} />}
            {this.state.timer && <Timer />}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Algorithm;

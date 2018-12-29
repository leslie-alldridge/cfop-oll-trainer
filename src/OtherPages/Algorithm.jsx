import React, { Component } from "react";
import { Link } from "react-router-dom";

import Timer from "./Timer";
import Drills from "./Drills";

class Algorithm extends Component {
  state = {
    timer: false,
    alg: "",
    selected: false,
    hide: false
  };

  handleDrills = () => {
    this.setState({
      timer: false,
      hide: true
    });
  };

  handleTimer = () => {
    this.setState({
      timer: true,
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
            {this.state.selected !== false && <p>Session Type</p>}
            {this.state.selected !== false && (
              <Link
                id="buttonSession"
                className={"button is-link"}
                onClick={this.handleDrills}
                to="/drills"
              >
                Drills
              </Link>
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

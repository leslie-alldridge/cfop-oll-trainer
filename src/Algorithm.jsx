import React, { Component } from "react";
import Timer from "./Timer";
import Drills from "./Drills";

class Algorithm extends Component {
  state = {
    drills: false,
    timer: false
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
        {this.props.data.alg.map(item => {
          return <p>{item}</p>;
        })}
        <p>Session Type</p>
        <button>Drills</button>
        <button>Time Based</button>
        <Timer />
        <Drills />
      </div>
    );
  }
}

export default Algorithm;

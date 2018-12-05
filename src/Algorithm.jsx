import React, { Component } from "react";

class Algorithm extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <p>hi</p>
        {this.props.data.alg.map(item => {
          return <p>{item}</p>
          
        })}
      </div>
    );
  }
}

export default Algorithm;

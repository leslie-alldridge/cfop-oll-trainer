import React from "react";
import Algorithm from "../Algorithm";
import OLL21 from "../images/OLL-21.PNG";
import OLL22 from "../images/OLL-22.PNG";
import OLL23 from "../images/OLL-23.PNG";
import OLL24 from "../images/OLL-24.PNG";
import OLL25 from "../images/OLL-25.PNG";
import OLL26 from "../images/OLL-26.PNG";
import OLL27 from "../images/OLL-27.PNG";
import data from "../data";

class OLL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "OLL21",
      showPage: false,
      mainPage: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleClick(e) {
    this.setState({
      selection: e.target.name,
      showPage: true,
      mainPage: false
    });
  }

  goBack() {
    this.setState({
      showPage: false,
      mainPage: true
    });
  }

  render() {
    const selection = this.state.selection;
    var found = data.find(function(element) {
      return element.id === selection;
    });
    console.log(found);
    return (
      <div className="container">
        {this.state.mainPage && (
          <React.Fragment>
            <h3 className="title is-3">Please pick an OLL below</h3>
            <p>All Edges Correctly Oriented</p>
            <div className="columns is-mobile">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    name={"OLL21"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL21}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL22"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL22}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL23"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL23}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL24"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL24}
                  />
                </figure>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL25"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL25}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL26"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL26}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL27"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL27}
                  />
                </figure>
              </div>

              <div className="column" />
            </div>
          </React.Fragment>
        )}
        {this.state.showPage && (
          <Algorithm
            goBack={this.goBack}
            data={found}
            image={this.state.selection}
          />
        )}
      </div>
    );
  }
}

export default OLL;

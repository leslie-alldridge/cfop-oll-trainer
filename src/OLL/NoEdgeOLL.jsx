import React from "react";
import Algorithm from "../Algorithm";
import OLL20 from "../images/OLL-20.png";
import OLL19 from "../images/OLL-19.png";
import OLL18 from "../images/OLL-18.png";
import OLL17 from "../images/OLL-17.png";
import OLL04 from "../images/OLL-4.png";
import OLL03 from "../images/OLL-3.png";
import OLL02 from "../images/OLL-2.png";
import OLL01 from "../images/OLL-1.png";
import data from "../data";

class NoEdgeOLL extends React.Component {
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
            <p className="title is-3">No Edges Correctly Oriented </p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    name={"OLL01"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL01}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL02"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL02}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL03"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL03}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL04"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL04}
                  />
                </figure>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL17"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL17}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL20"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL20}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL18"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL18}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL19"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL19}
                  />
                </figure>
              </div>
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

export default NoEdgeOLL;

import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL06 from "../images/OLL-6.PNG";
import OLL05 from "../images/OLL-5.PNG";

import data from "../Data/SquareShapesData";

class SquareShapes extends React.Component {
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
      mainPage: true
    });
    this.props.handlePageChange("SquareShapes");
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
    return (
      <div className="container">
        {this.state.mainPage && (
          <React.Fragment>
            <p className="title is-3">Square Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL06"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL06}
                    id={this.state.selection === "OLL06" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL05"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL05}
                    id={this.state.selection === "OLL05" ? "activeAlg" : null}
                  />
                </figure>
              </div>
            </div>
          </React.Fragment>
        )}
        {this.state.showPage && (
          <Algorithm
            goBack={() => {
              this.props.goBack();
              this.goBack();
            }}
            data={found}
            image={this.state.selection}
          />
        )}
      </div>
    );
  }
}

export default SquareShapes;

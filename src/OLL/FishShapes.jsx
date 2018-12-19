import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL09 from "../images/OLL-9.png";
import OLL10 from "../images/OLL-10.png";
import OLL35 from "../images/OLL-35.png";
import OLL37 from "../images/OLL-37.png";

import data from "../Data/FishShapesData";

class FishShapes extends React.Component {
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
    this.props.handlePageChange("FishShapes");
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
            <p className="title is-3">Fish Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL09"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL09}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL10"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL10}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL35"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL35}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL37"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL37}
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

export default FishShapes;

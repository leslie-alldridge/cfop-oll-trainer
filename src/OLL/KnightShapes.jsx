import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL13 from "../images/OLL-13.png";
import OLL14 from "../images/OLL-14.png";
import OLL15 from "../images/OLL-15.png";
import OLL16 from "../images/OLL-16.png";

import data from "../Data/KnightShapesData";

class KnightShapes extends React.Component {
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
    this.props.handlePageChange("KnightShapes");
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
            <hr />

            <p className="title is-3">Knight Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL13"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL13}
                    id={this.state.selection === "OLL13" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL14"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL14}
                    id={this.state.selection === "OLL14" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL15"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL15}
                    id={this.state.selection === "OLL15" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL16"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL16}
                    id={this.state.selection === "OLL16" ? "activeAlg" : null}
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

export default KnightShapes;

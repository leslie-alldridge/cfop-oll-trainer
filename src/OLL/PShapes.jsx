import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL44 from "../images/OLL-44.PNG";
import OLL43 from "../images/OLL-43.PNG";
import OLL32 from "../images/OLL-32.PNG";
import OLL31 from "../images/OLL-31.PNG";

import data from "../Data/PShapesData";

class IShapes extends React.Component {
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
    this.props.handlePageChange("PShapes");
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

            <p className="title is-3">P Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL44"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL44}
                    id={this.state.selection === "OLL44" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL43"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL43}
                    id={this.state.selection === "OLL43" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL32"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL32}
                    id={this.state.selection === "OLL32" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL31"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL31}
                    id={this.state.selection === "OLL31" ? "activeAlg" : null}
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

export default IShapes;

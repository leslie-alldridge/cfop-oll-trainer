import React from "react";
import Algorithm from "../OtherPages/Algorithm";
import OLL21 from "../images/OLL-21.PNG";
import OLL22 from "../images/OLL-22.PNG";
import OLL23 from "../images/OLL-23.PNG";
import OLL24 from "../images/OLL-24.PNG";
import OLL25 from "../images/OLL-25.PNG";
import OLL26 from "../images/OLL-26.PNG";
import OLL27 from "../images/OLL-27.PNG";
import data from "../Data/allEdgesData";

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
      mainPage: true
    });
    this.props.handlePageChange("OLL");
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
            <h3 className="title is-4">Please pick an OLL below</h3>
            <p className="title is-3">All Edges Correctly Oriented</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL21"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL21}
                    id={this.state.selection === "OLL21" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL22"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL22}
                    id={this.state.selection === "OLL22" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL23"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL23}
                    id={this.state.selection === "OLL23" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL24"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL24}
                    id={this.state.selection === "OLL24" ? "activeAlg" : null}
                  />
                </figure>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL25"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL25}
                    id={this.state.selection === "OLL25" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL26"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL26}
                    id={this.state.selection === "OLL26" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL27"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL27}
                    id={this.state.selection === "OLL27" ? "activeAlg" : null}
                  />
                </figure>
              </div>

              <div className="column" />
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

export default OLL;

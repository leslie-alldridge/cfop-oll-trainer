import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL30 from "../images/OLL-30.PNG";
import OLL29 from "../images/OLL-29.PNG";
import OLL41 from "../images/OLL-41.PNG";
import OLL42 from "../images/OLL-42.PNG";

import data from "../Data/PShapesData";

class Awkward extends React.Component {
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
    this.props.handlePageChange("Awkward");
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
            <p className="title is-3">Awkward Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL30"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL30}
                    id={this.state.selection === "OLL30" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL29"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL29}
                    id={this.state.selection === "OLL29" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL41"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL41}
                    id={this.state.selection === "OLL41" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL42"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL42}
                    id={this.state.selection === "OLL42" ? "activeAlg" : null}
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

export default Awkward;

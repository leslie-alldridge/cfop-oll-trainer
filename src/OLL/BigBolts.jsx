import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL40 from "../images/OLL-40.PNG";
import OLL39 from "../images/OLL-39.PNG";

import data from "../Data/BigBoltsData";

class BigBolts extends React.Component {
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
    this.props.handlePageChange("BigBolts");
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

            <p className="title is-3">Big Bolts Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL40"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL40}
                    id={this.state.selection === "OLL40" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL39"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL39}
                    id={this.state.selection === "OLL39" ? "activeAlg" : null}
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

export default BigBolts;

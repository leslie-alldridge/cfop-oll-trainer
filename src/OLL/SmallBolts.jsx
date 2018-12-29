import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL08 from "../images/OLL-8.PNG";
import OLL07 from "../images/OLL-7.PNG";
import OLL12 from "../images/OLL-12.PNG";
import OLL11 from "../images/OLL-11.PNG";

import data from "../Data/SmallBoltsData";

class SmallBolts extends React.Component {
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
    this.props.handlePageChange("SmallBolts");
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

            <p className="title is-3">Small Bolts Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL08"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL08}
                    id={this.state.selection === "OLL08" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL07"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL07}
                    id={this.state.selection === "OLL07" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL12"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL12}
                    id={this.state.selection === "OLL12" ? "activeAlg" : null}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL11"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL11}
                    id={this.state.selection === "OLL11" ? "activeAlg" : null}
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

export default SmallBolts;

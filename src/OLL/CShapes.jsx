import React from "react";
import Algorithm from "../Algorithm";
import OLL34 from "../images/OLL-34.png";
import OLL46 from "../images/OLL-46.png";

import data from "../data";

class CShapes extends React.Component {
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
            <p className="title is-3">C Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    name={"OLL34"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL34}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    name={"OLL46"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL46}
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

export default CShapes;

import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL45 from "../images/OLL-45.PNG";
import OLL33 from "../images/OLL-33.PNG";

import data from "../Data/TShapesData";

class TShapes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "OLL21",
      showPage: false,
      mainPage: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.goBack = this.goBack.bind(this)
  }

  handleClick(e) {
    this.setState({
      selection: e.target.name,
      showPage: true,
      mainPage: true
    });
    this.props.handlePageChange('TShapes')
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
            <p className="title is-3">T Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                 
                  className="grow"
                    name={"OLL45"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL45}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL33"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL33}
                  />
                </figure>
              </div>
            </div>
          </React.Fragment>
        )}
        {this.state.showPage && (
          <Algorithm
            goBack={() => {this.props.goBack(); this.goBack()}}
            data={found}
            image={this.state.selection}
          />
        )}
      </div>
    );
  }
}

export default TShapes;

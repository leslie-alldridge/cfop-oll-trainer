import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL28 from "../images/OLL-28.PNG";
import OLL57 from "../images/OLL-57.PNG";

import data from "../Data/ArrowHShapesData";

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
    this.props.handlePageChange("ArrowHShapes");
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
            <p className="title is-3">Arrow &nbsp; H Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL28"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL28}
                    id={this.state.selection === 'OLL28' ? 'activeAlg' : null}

                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    className="grow"
                    name={"OLL57"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL57}
                    id={this.state.selection === 'OLL57' ? 'activeAlg' : null}

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

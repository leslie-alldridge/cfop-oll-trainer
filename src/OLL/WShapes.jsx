import React from "react";
import Algorithm from "../OtherPages/Algorithm";

import OLL38 from "../images/OLL-38.PNG";
import OLL36 from "../images/OLL-36.PNG";

import data from "../Data/WShapesData";

class WShapes extends React.Component {
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
    this.props.handlePageChange('WShapes')
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
            <p className="title is-3">W Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                 
                  className="grow"
                    name={"OLL38"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL38}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL36"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL36}
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

export default WShapes;

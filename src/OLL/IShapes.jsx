import React from "react";
import Algorithm from "../Algorithm";

import OLL51 from "../images/OLL-51.png";
import OLL52 from "../images/OLL-52.png";
import OLL55 from "../images/OLL-55.png";
import OLL56 from "../images/OLL-56.png";

import data from "../IShapesData";

class IShapes extends React.Component {
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
    this.props.handlePageChange('IShapes')
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
            <p className="title is-3">I Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                 
                  className="grow"
                    name={"OLL55"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL55}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL52"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL52}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL51"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL51}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL56"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL56}
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

export default IShapes;

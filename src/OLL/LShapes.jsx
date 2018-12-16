import React from "react";
import Algorithm from "../Algorithm";

import OLL47 from "../images/OLL-47.png";
import OLL48 from "../images/OLL-48.png";
import OLL49 from "../images/OLL-49.png";
import OLL50 from "../images/OLL-50.png";
import OLL53 from "../images/OLL-53.png";
import OLL54 from "../images/OLL-54.png";

import data from "../LShapesData";

class LShapes extends React.Component {
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
    this.props.handlePageChange('LShapes')
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
            <p className="title is-3">L Shapes</p>
            <div className="columns is-mobile algContainer">
              <div className="column ">
                <figure className="image is-128x128">
                  <img
                 
                  className="grow"
                    name={"OLL48"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL48}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL47"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL47}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL54"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL54}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                  <img
                
                  className="grow"
                    name={"OLL53"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL53}
                  />
                </figure>
              </div>
              </div>
              <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                 <img
                  className="grow"
                    name={"OLL49"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL49}
                  />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-128x128">
                 <img
                  className="grow"
                    name={"OLL50"}
                    alt={"OLL Case"}
                    onClick={this.handleClick}
                    src={OLL50}
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

export default LShapes;

import React from "react";
import Algorithm from "./Algorithm";
import OLL21 from "./images/OLL-21.PNG";
import OLL22 from "./images/OLL-22.PNG";
import OLL23 from "./images/OLL-23.PNG";
import OLL24 from "./images/OLL-24.PNG";
import OLL25 from "./images/OLL-25.PNG";
import OLL26 from "./images/OLL-26.PNG";
import OLL27 from "./images/OLL-27.PNG";
import data from "./data";

function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

class OLL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "",
      showPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      selection: e.target.name,
      showPage: true
    });
    console.log(e.target.name);
    console.log(data);
  }

  render() {
    const alg = findObjectByKey(
      data,
      this.state.selection,
      this.state.selection
    );
    console.log(alg);
    console.log(this.state.selection);

    return (
      <div className="container">
        <h3 className="title is-3">Please pick an OLL below</h3>
        <p>All Edges Correctly Oriented</p>

        <div className="columns is-mobile">
          <div className="column ">
            <figure class="image is-128x128">
              <img name={"OLL21"} onClick={this.handleClick} src={OLL21} />
            </figure>
          </div>
          <div className="column">
            <figure class="image is-128x128">
              <img src={OLL22} />
            </figure>
          </div>
          <div className="column">
            <figure class="image is-128x128">
              <img src={OLL23} />
            </figure>
          </div>
          <div className="column">
            <figure class="image is-128x128">
              <img src={OLL24} />
            </figure>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <figure class="image is-128x128">
              <img src={OLL25} />
            </figure>
          </div>
          <div class="column">
            <figure class="image is-128x128">
              <img src={OLL26} />
            </figure>
          </div>
          <div class="column">
            <figure class="image is-128x128">
              <img src={OLL27} />
            </figure>
          </div>
          <div class="column" />
        </div>
        <Algorithm data={data} />
      </div>
    );
  }
}

export default OLL;

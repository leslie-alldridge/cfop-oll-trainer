import React, { Component } from "react";
import OLL from "./OLL/OLL";
import NoEdgeOLL from "./OLL/NoEdgeOLL";
import CShapes from "./OLL/CShapes";
class App extends Component {
  state ={
    OLL: true,
    NoEdgeOLL: true,
    CShapes: true
  }

  handlePageChange = (name) => {
    console.log(name);
    
    if (name === 'CShapes'){
      this.setState({
        CShapes: true,
        NoEdgeOLL: false,
        OLL: false
      })
    } else if (name === 'OLL'){
      this.setState({
        CShapes: false,
        NoEdgeOLL: false,
        OLL: true
      })
    } else {
      this.setState({
        CShapes: false,
        NoEdgeOLL: true,
        OLL: false
      })
    }
  }

  goBack = () => {
    this.setState({
      OLL: true, 
      NoEdgeOLL: true,
      CShapes: true
    })
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">SpeedCube 3x3 OLL</h1>
              <h2 className="subtitle">Trainer and Algorithms </h2>
            </div>
          </div>
        </section>
       {this.state.OLL && <OLL goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
       {this.state.NoEdgeOLL && <NoEdgeOLL goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
        {this.state.CShapes && <CShapes goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
      </div>
    );
  }
}

export default App;

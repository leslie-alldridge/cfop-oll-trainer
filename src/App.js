import React, { Component } from "react";

import OLL from "./OLL/OLL";
import NoEdgeOLL from "./OLL/NoEdgeOLL";
import CShapes from "./OLL/CShapes";
import IShapes from './OLL/IShapes';
import LShapes from './OLL/LShapes'

class App extends Component {
  state ={
    OLL: true,
    NoEdgeOLL: true,
    CShapes: true,
    IShapes: true,
    LShapes: true
  }

  handlePageChange = (name) => {    
    if (name === 'CShapes'){
      this.setState({
        CShapes: true,
        NoEdgeOLL: false,
        OLL: false,
        IShapes: false

      })
    } else if (name === 'OLL'){
      this.setState({
        CShapes: false,
        NoEdgeOLL: false,
        OLL: true,
        IShapes: false

      })
    }else if (name === 'IShapes'){
      this.setState({
        CShapes: false,
        NoEdgeOLL: false,
        OLL: false,
        IShapes: true
      })
    } else {
      this.setState({
        CShapes: false,
        NoEdgeOLL: true,
        OLL: false,
        IShapes: false
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
        {this.state.IShapes && <IShapes goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
        {this.state.LShapes && <LShapes goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
      </div>
    );
  }
}

export default App;

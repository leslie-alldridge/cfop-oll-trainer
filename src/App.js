import React, { Component } from "react";

import OLL from "./OLL/OLL";
import NoEdgeOLL from "./OLL/NoEdgeOLL";
import CShapes from "./OLL/CShapes";
import IShapes from './OLL/IShapes';
import LShapes from './OLL/LShapes';
import PShapes from './OLL/PShapes'

class App extends Component {
  state ={
    OLL: true,
    NoEdgeOLL: true,
    CShapes: true,
    IShapes: true,
    LShapes: true,
    PShapes: true
  }

  handlePageChange = (name) => {  
    Object.keys(this.state).map(
      i => i === name ? this.setState({[name]: true}) : this.setState({[i]: false}))
    }

  goBack = () => {
    Object.keys(this.state).map(
      i => this.setState({ [i]: true }))
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
        {this.state.PShapes && <PShapes goBack={this.goBack} handlePageChange={this.handlePageChange}/>}
      </div>
    );
  }
}

export default App;

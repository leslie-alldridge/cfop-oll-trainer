import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import OLL from "./OLL/OLL";
import NoEdgeOLL from "./OLL/NoEdgeOLL";
import CShapes from "./OLL/CShapes";
import IShapes from "./OLL/IShapes";
import LShapes from "./OLL/LShapes";
import PShapes from "./OLL/PShapes";
import TShapes from "./OLL/TShapes";
import WShapes from "./OLL/WShapes";
import Awkward from "./OLL/Awkward";
import FishShapes from "./OLL/FishShapes";
import KnightShapes from "./OLL/KnightShapes";
import BigBolts from "./OLL/BigBolts";
import SmallBolts from "./OLL/SmallBolts";
import SquareShapes from "./OLL/SquareShapes";
import ArrowHShapes from "./OLL/ArrowHShapes";
import Drills from "./OtherPages/Drills";

class App extends Component {
  state = {
    OLL: true,
    NoEdgeOLL: true,
    CShapes: true,
    IShapes: true,
    LShapes: true,
    PShapes: true,
    TShapes: true,
    WShapes: true,
    Awkward: true,
    FishShapes: true,
    KnightShapes: true,
    BigBolts: true,
    SmallBolts: true,
    SquareShapes: true,
    ArrowHShapes: true
  };

  handlePageChange = name => {
    Object.keys(this.state).map(i =>
      i === name
        ? this.setState({ [name]: true })
        : this.setState({ [i]: false })
    );
  };

  goBack = () => {
    Object.keys(this.state).map(i => this.setState({ [i]: true }));
  };

  render() {
    const MyOLL = props => {
      return (
        <OLL
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    return (
      <Router>
        <div className="App">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">SpeedCube 3x3 OLL</h1>
                <h2 className="subtitle">Trainer and Algorithms </h2>
              </div>
            </div>
          </section>
          <div id="bodyContent">
            {this.state.OLL && <Route exact path="/" render={MyOLL} />}
            {this.state.NoEdgeOLL && (
              <NoEdgeOLL
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.CShapes && (
              <CShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.IShapes && (
              <IShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.LShapes && (
              <LShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.PShapes && (
              <PShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.TShapes && (
              <TShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.WShapes && (
              <WShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.Awkward && (
              <Awkward
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.FishShapes && (
              <FishShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.KnightShapes && (
              <KnightShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.BigBolts && (
              <BigBolts
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.SmallBolts && (
              <SmallBolts
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.SquareShapes && (
              <SquareShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
            {this.state.ArrowHShapes && (
              <ArrowHShapes
                goBack={this.goBack}
                handlePageChange={this.handlePageChange}
              />
            )}
          </div>
          <Route path="/drills" component={Drills} />
        </div>
      </Router>
    );
  }
}

export default App;

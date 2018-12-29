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
    const MyNoEdgeOLL = props => {
      return (
        <NoEdgeOLL
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyCShapes = props => {
      return (
        <CShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };

    const MyIShapes = props => {
      return (
        <IShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyLShapes = props => {
      return (
        <LShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyPShapes = props => {
      return (
        <PShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyTShapes = props => {
      return (
        <TShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyWShapes = props => {
      return (
        <WShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyAwkward = props => {
      return (
        <Awkward
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyFishShapes = props => {
      return (
        <FishShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyKnightShapes = props => {
      return (
        <KnightShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyBigBolts = props => {
      return (
        <BigBolts
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MySmallBolts = props => {
      return (
        <SmallBolts
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MySquareShapes = props => {
      return (
        <SquareShapes
          goBack={this.goBack}
          handlePageChange={this.handlePageChange}
          {...props}
        />
      );
    };
    const MyArrowHShapes = props => {
      return (
        <ArrowHShapes
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
              <Route exact path="/" render={MyNoEdgeOLL} />
            )}
            {this.state.CShapes && <Route exact path="/" render={MyCShapes} />}
            {this.state.IShapes && <Route exact path="/" render={MyIShapes} />}
            {this.state.LShapes && <Route exact path="/" render={MyLShapes} />}
            {this.state.PShapes && <Route exact path="/" render={MyPShapes} />}
            {this.state.TShapes && <Route exact path="/" render={MyTShapes} />}
            {this.state.WShapes && <Route exact path="/" render={MyWShapes} />}
            {this.state.Awkward && <Route exact path="/" render={MyAwkward} />}
            {this.state.FishShapes && (
              <Route exact path="/" render={MyFishShapes} />
            )}
            {this.state.KnightShapes && (
              <Route exact path="/" render={MyKnightShapes} />
            )}
            {this.state.BigBolts && (
              <Route exact path="/" render={MyBigBolts} />
            )}
            {this.state.SmallBolts && (
              <Route exact path="/" render={MySmallBolts} />
            )}
            {this.state.SquareShapes && (
              <Route exact path="/" render={MySquareShapes} />
            )}
            {this.state.ArrowHShapes && (
              <Route exact path="/" render={MyArrowHShapes} />
            )}
          </div>
          <Route path="/drills" component={Drills} />
        </div>
      </Router>
    );
  }
}

export default App;

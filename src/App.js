import React, { Component } from 'react';
import './App.css';
import OLL from './OLL'
class App extends Component {
  render() {
    return (
      <div className="App">
<section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        SpeedCube 3x3 OLL
      </h1>
      <h2 className="subtitle">
Trainer and Algorithms      </h2>
    </div>
  </div>
</section>
       <OLL/>
      </div>
    );
  }
}

export default App;

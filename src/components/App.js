import React, { Component } from 'react';
import '../App.css';
import FiveTables from './FiveTables';

class App extends Component {

  render() {
    const {screen} = this.state || {};

    return (
      <div className="App">
        <button onClick={() => this.setState({screen: 'soccer'})}>
          Soccer
        </button>
        <button onClick={() => this.setState({screen: 'nba'})}>
          NBA
        </button>
        <button onClick={() => this.setState({screen: 'nfl'})}>
          NFL
        </button>
        {screen === 'soccer' && <FiveTables />}
      </div>
    );
  }
}

export default App;

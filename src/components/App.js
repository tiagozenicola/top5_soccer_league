import React, { Component } from 'react';
import '../App.css';
import FiveTables from './FiveTables';
import NBA from './NBA';
import NFL from './NFL';

class App extends Component {

  state = {screen: 'nba'}

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
        {screen === 'nba' && <NBA />}
        {screen === 'nfl' && <NFL />}
      </div>
    );
  }
}

export default App;

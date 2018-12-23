import React, { Component } from 'react';
import '../App.css';
import Soccer from './Soccer';
import NBA from './NBA';
import NFL from './NFL';

class App extends Component {

  state = {screen: 'soccer'}

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
        {screen === 'soccer' && <Soccer />}
        {screen === 'nba' && <NBA />}
        {screen === 'nfl' && <NFL />}
      </div>
    );
  }
}

export default App;

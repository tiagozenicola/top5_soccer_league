import React, { Component } from 'react';
import '../App.css';
import Soccer from './Soccer';
import NBA from './NBA';
import NFL from './NFL';
import FavoriteTeams from './FavoriteTeams';

class App extends Component {
  state = {
    screen: 'soccer',
  }

  render() {
    const { screen } = this.state;

    return (
      <div className="App">
        <button type="button" onClick={() => this.setState({ screen: 'soccer' })}>
          Soccer
        </button>
        <button type="button" onClick={() => this.setState({ screen: 'nba' })}>
          This should not be here 6
        </button>
        <button type="button" onClick={() => this.setState({ screen: 'nfl' })}>
          NFL
        </button>
        <button type="button" onClick={() => this.setState({ screen: 'favorite_teams' })}>
          Favorite Teams
        </button>
        {screen === 'soccer' && <Soccer />}
        {screen === 'nba' && <NBA />}
        {screen === 'nfl' && <NFL />}
        {screen === 'favorite_teams' && <FavoriteTeams />}
      </div>
    );
  }
}

export default App;

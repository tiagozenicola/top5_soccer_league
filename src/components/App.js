import React, { Component } from 'react';
import '../App.css';
import Soccer from './Soccer';
import NBA from './NBA';
import NFL from './NFL';
import FavoriteTeams from './FavoriteTeams';

class App extends Component {

  state = {
    screen: 'soccer',
    favorite_teams: []
  }

  saveTeam = (newTeam) => {
    console.log('saveTeam')
    const {favorite_teams} = this.state

    if (newTeam === ''){
      alert('Please, choose a team name')
      return
    }

    if (favorite_teams.map((s)=>s.toUpperCase()).includes(newTeam.toUpperCase())){
      alert('Team already exists')
      return
    }

    this.setState({favorite_teams: [...favorite_teams, newTeam]})
  }

  render() {
    const {screen, favorite_teams} = this.state || {};

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
        <button onClick={() => this.setState({screen: 'favorite_teams'})}>
          Favorite Teams
        </button>
        {screen === 'soccer' && <Soccer favorite_teams={favorite_teams}/>}
        {screen === 'nba' && <NBA />}
        {screen === 'nfl' && <NFL />}
        {screen === 'favorite_teams' && <FavoriteTeams favorite_teams={favorite_teams} saveTeam={this.saveTeam}/>}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import Table from './table.js';

class App extends Component {

  render() {
    const teams = [
      {
          "name": "Man City",
          "games_played": 13,
          "win": 11,
          "drawn": 2,
          "lost": 0,
          "goals_for": 40,
          "goals_against": 5,
          "goal_difference": 35,
          "points": 35,
          "history": ['w','w','w','w','w'],
      },
      {
          "name": "Barcelona",
          "games_played": 13,
          "win": 7,
          "drawn": 4,
          "lost": 2,
          "goals_for": 35,
          "goals_against": 19,
          "goal_difference": 16,
          "points": 25,
          "history": ['w','w','w','l','d'],
      },
    ];

    return (
      <div className="App">
        <Table teams={teams}/>
      </div>
    );
  }
}

export default App;

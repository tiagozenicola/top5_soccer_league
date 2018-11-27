import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const teams = [
      {
          "name": "Real Madri",
          "points": 10,
      },
      {
          "name": "Barcelona",
          "points": 9,
      },
    ];

    const listTeams = teams.map((team) =>
      <li>{team.name}</li>
    );

    return (
      <div className="App">
        <ul>{listTeams}</ul>
      </div>
    );
  }
}

export default App;

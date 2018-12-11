import React, {Component} from 'react';
import {StyledTable, TextWrapper} from './style';

class Table extends Component {

  componentDidMount(){
    fetch('https://cors-escape.herokuapp.com/https://www.theguardian.com/football/tables')
      .then(console.log)
      .catch(console.error);
  }

  render(){
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
  
  
    const listTeams = teams.map((team, index) =>
      <tr key={team.name}>
        <td>{index + 1}</td>
        <td>{team.name}</td>
        <td>{team.games_played}</td>
        <td>{team.win}</td>
        <td>{team.drawn}</td>
        <td>{team.lost}</td>
        <td>{team.goals_for}</td>
        <td>{team.goals_against}</td>
        <td>{team.goal_difference}</td>
        <td>{team.points}</td>
        <td>{team.history}</td>
      </tr>
    );
  
    return (
      <div>
        <TextWrapper>
          {this.props.country}
        </TextWrapper>
        <StyledTable className="soccer_table">
        <thead>
          <tr>
              <th>P</th>
              <th>Team</th>
              <th>GP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F</th>
              <th>A</th>
              <th>GD</th>
              <th>Pts</th>
              <th>Form</th>
            </tr>
        </thead>
        <tbody>
          {listTeams}
        </tbody>  
        </StyledTable>
      </div>
    );
  }

}

export default Table;

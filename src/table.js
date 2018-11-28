import React from 'react';

function Table(props){

  const listTeams = props.teams.map((team, index) =>
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
    <table className="soccer_table">
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
    </table>
  );
}

export default Table;

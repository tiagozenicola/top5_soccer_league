import React, {Component} from 'react';
import {StyledTable, TextWrapper} from './style';

class Table extends Component {

  state = {
  }

  sort = field => {
    console.log('sort', this.state)
    this.setState({ sortProperty: field })
  }

  getSortedTeams = () => {
    console.log('getSortedTeams', this.props, this.state)
    const {sortProperty} = this.state

    if (sortProperty){
      console.log('***sort***', this.props, this.state)
      return this.props.teams.sort((a,b)=>{
        console.log(11, a,b, a['points'])
        if (a[sortProperty] < b[sortProperty]){
          return -1;
        }
        if (a[sortProperty] > b[sortProperty]){
          return 1;
        }
        return 0;
      })
    }

    return this.props.teams
  }

  render(){
    console.log('render', this.props)
    const teams = this.getSortedTeams()

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
        <td>{team.percent.toFixed(3)}</td>
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
              <th><button onClick={() => this.sort('points')}>P</button></th>
              <th><button onClick={() => this.sort('name')}>Team</button></th>
              <th>GP</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F</th>
              <th>A</th>
              <th>GD</th>
              <th>Pts</th>
              <th>Form</th>
              <th>%</th>
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

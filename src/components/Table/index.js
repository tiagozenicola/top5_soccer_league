import React, {Component} from 'react';
import {StyledTable, TextWrapper} from './style';

class Table extends Component {

  state = {
    orientation: 1
  }

  sort = field => {
    const {sortProperty, orientation} = this.state
    
    console.log('sort', sortProperty, orientation)

    if (field === sortProperty){
      this.setState({ 
        sortProperty: field,
        orientation: orientation * -1 
      })
      return
    }
    
    this.setState({ sortProperty: field })
  }

  getSortedTeams = () => {
    const {sortProperty, orientation} = this.state

    if (sortProperty){
      return this.props.teams.sort((a,b) => {
        if (a[sortProperty] < b[sortProperty]){
          return -1 * orientation;
        }

        if (a[sortProperty] > b[sortProperty]){
          return 1 * orientation;
        }

        return 0;
      })
    }

    return this.props.teams
  }

  render(){
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
              <th>
                <button onClick={() => this.sort('points')}>P</button>
              </th>
              <th>
                <button onClick={() => this.sort('name')}>Team</button>
              </th>
              <th>
                <button onClick={() => this.sort('games_played')}>GP</button>
              </th>
              <th>
                <button onClick={() => this.sort('win')}>W</button>
              </th>
              <th>
                <button onClick={() => this.sort('drawn')}>D</button>
              </th>
              <th>
                <button onClick={() => this.sort('lost')}>L</button>
              </th>
              <th>
                <button onClick={() => this.sort('goals_for')}>F</button>
              </th>
              <th>
                <button onClick={() => this.sort('goals_against')}>A</button>
              </th>
              <th>
                <button onClick={() => this.sort('goal_difference')}>GD</button>
              </th>
              <th>
                <button onClick={() => this.sort('points')}>Pts</button>
              </th>
              <th>
                <button onClick={() => this.sort('history')}>Form</button>
              </th>
              <th>
                <button onClick={() => this.sort('percent')}>%</button>
              </th>
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

import React, {Component} from 'react';
import { StyledTable, TextWrapper } from './style';
import Button from '../Button'


class Table extends Component {

  state = {
    sortProperty: 'position',
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
        <td>{team.position}</td>
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
                <Button value="P" {...this.state} onClick={() => this.sort('position')}/>
              </th>
              <th>
                <Button onClick={() => this.sort('name')}>Team</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('games_played')}>GP</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('win')}>W</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('drawn')}>D</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('lost')}>L</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('goals_for')}>F</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('goals_against')}>A</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('goal_difference')}>GD</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('points')}>Pts</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('history')}>Form</Button>
              </th>
              <th>
                <Button onClick={() => this.sort('percent')}>%</Button>
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

import React, {Component} from 'react';
import { StyledTable, TextWrapper } from './style';
import Button from '../Button'


class Table extends Component {

  state = {
    sortProperty: 'percent',
    orientation: -1
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

    const listTeams = teams.map((team) =>
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
            <th><Button value="P" name='position' {...this.state} onClick={this.sort}/></th>
            <th><Button value="Team" name='name' {...this.state} onClick={this.sort}/></th>
            <th><Button value="GP" name='games_played' {...this.state} onClick={this.sort}/></th>
            <th><Button value="W" name='win' {...this.state} onClick={this.sort}/></th>
            <th><Button value="D" name='drawn' {...this.state} onClick={this.sort}/></th>
            <th><Button value="L" name='lost' {...this.state} onClick={this.sort}/></th>
            <th><Button value="F" name='goals_for' {...this.state} onClick={this.sort}/></th>
            <th><Button value="A" name='goals_against' {...this.state} onClick={this.sort}/></th>
            <th><Button value="GD" name='goal_difference' {...this.state} onClick={this.sort}/></th>            
            <th><Button value="Pts" name='points' {...this.state} onClick={this.sort}/></th>
            <th><Button value="Form" name='history' {...this.state} onClick={this.sort}/></th>
            <th><Button value="%" name='percent' {...this.state} onClick={this.sort}/></th>
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

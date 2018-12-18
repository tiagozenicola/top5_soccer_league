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
                <Button value="Team" {...this.state} onClick={() => this.sort('name')}/>
              </th>
              <th>
                <Button value="GP" {...this.state} onClick={() => this.sort('games_played')}/>
              </th>
              <th>
                <Button value="W" {...this.state} onClick={() => this.sort('win')}/>
              </th>
              <th>
                <Button value="D" {...this.state} onClick={() => this.sort('drawn')}/>
              </th>
              <th>
                <Button value="L" {...this.state} onClick={() => this.sort('lost')}/>
              </th>
              <th>
                <Button value="F" {...this.state} onClick={() => this.sort('goals_for')}/>
              </th>
              <th>
                <Button value="A" {...this.state} onClick={() => this.sort('goals_against')}/>
              </th>
              <th>
                <Button value="GD" {...this.state} onClick={() => this.sort('goal_difference')}/>
              </th>
              <th>
                <Button value="Pts" {...this.state} onClick={() => this.sort('points')}/>
              </th>
              <th>
                <Button value="Form" {...this.state} onClick={() => this.sort('history')}/>
              </th>
              <th>
                <Button value="%" {...this.state} onClick={() => this.sort('percent')}/>
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

import React, { Component } from 'react';
import { StyledTable, TextWrapper } from './style';
import Button from '../Button';


class SortableTable extends Component {
  state = {
    sortProperty: 'goals',
    orientation: -1,
  }

  sort = (field) => {
    const { sortProperty, orientation } = this.state;

    if (field === sortProperty) {
      this.setState({
        sortProperty: field,
        orientation: orientation * -1,
      });
      return;
    }

    this.setState({ sortProperty: field });
  }

  getSortedTeams = () => {
    const { sortProperty, orientation } = this.state;
    const { stats } = this.props;

    if (sortProperty) {
      return stats.sort((a, b) => {
        if (a[sortProperty] < b[sortProperty]) {
          return -1 * orientation;
        }

        if (a[sortProperty] > b[sortProperty]) {
          return 1 * orientation;
        }

        return 0;
      });
    }

    return stats;
  }

  showStarForFavoriteTeams = (favoriteTeams, teamName) => {
    const favoriteTeamsUpperCase = Array.from(favoriteTeams).map(s => s.toUpperCase().trim());
    const teamNameUpperCase = teamName.toUpperCase().trim();
    return favoriteTeamsUpperCase.includes(teamNameUpperCase) ? '★' : '';
  }

  changeFavorite = (teamName) => {
    const { favoriteTeams, addFavoriteTeamAction, removeFavoriteTeamAction } = this.props;
    const index = Array.from(favoriteTeams)
      .map(s => s.toUpperCase())
      .indexOf(teamName.toUpperCase().trim());

    if (index === -1) {
      addFavoriteTeamAction(teamName);
      return;
    }

    removeFavoriteTeamAction(index);
  }

  render() {
    const teams = this.getSortedTeams();
    const { country } = this.props;

    const listTeams = teams.map(team => (
      <tr key={team.name}>
        <td>{team.name}</td>
        <td>{team.goals}</td>
        <td>{team.team}</td>
      </tr>
    ));

    return (
      <div>
        <TextWrapper>
          {country}
        </TextWrapper>
        <StyledTable className="soccer_table">
          <thead>
            <tr>
              <th><Button value="Player" name="name" {...this.state} onClick={this.sort} /></th>
              <th><Button value="Goals" name="goals" {...this.state} onClick={this.sort} /></th>
              <th><Button value="Team" name="team" {...this.state} onClick={this.sort} /></th>
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


export default (SortableTable);

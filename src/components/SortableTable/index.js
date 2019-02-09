import React, { Component } from 'react';
import StyledTable from './style';
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

  render() {
    const teams = this.getSortedTeams();
    const { numberField } = this.props;

    const listTeams = teams.map(team => (
      <tr key={team.name}>
        <td>{team.name}</td>
        <td>{team[numberField]}</td>
        <td>{team.team}</td>
      </tr>
    ));

    return (
      <div>
        <StyledTable className="soccer_table">
          <thead>
            <tr>
              <th><Button value="Player" name="name" {...this.state} onClick={this.sort} /></th>
              {/* eslint-disable max-len */}
              <th><Button value={numberField} name={numberField} {...this.state} onClick={this.sort} /></th>
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

import React, { Component } from 'react';
import Container from './style';
import Table from '../Table';
import SortableTable from '../SortableTable';

const API_URL = 'http://localhost:4000/graphql';
const GRAPHQL_REQUEST_BODY = `
{
  championships{
    country,
    teams{
			...teamFields
    }
    stats{
      assists{
        name
        assists
        team
      }
      goals{
        name
        goals
        team
      }
      goalsAndAssists{
        name
        goalsAndAssists
        team
      }
    }
  }
}

fragment teamFields on Team {
  position
  name
  games_played
  win
  drawn
  lost
  goals_for
  goals_against
  goal_difference
  points
  history
  percent
}`;

class Soccer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      championships: [],
    };
  }

  componentDidMount() {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: GRAPHQL_REQUEST_BODY }),
    })
      .then((response) => {
        if (!response.ok) {
          const errorMessage = 'Error calling site';
          throw new Error(errorMessage);
        }

        return response.text();
      })
      .then((responseBody) => {
        const championshipsArray = JSON.parse(responseBody).data;
        this.setState(championshipsArray);
      })
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    const {championships} = this.state;

    const allTeams = championships
      .flatMap(c => c.teams)
      .sort((a, b) => {
        if (a.percent < b.percent) {
          return 1;
        }
        if (a.percent > b.percent) {
          return -1;
        }

        return 0;
      });

    const tables = championships
      .map(c => <Table key={c.country} country={c.country} teams={c.teams} {...this.props} />); // eslint-disable-line max-len

    const goals = championships
      .map(c => <SortableTable key={c.country + '_goals'} country={c.country} stats={c.stats.goals} numberField={'goals'} {...this.props} />); // eslint-disable-line max-len

    const assists = championships
      .map(c => <SortableTable key={c.country + '_assists'} country={c.country} stats={c.stats.assists} numberField={'assists'} {...this.props} />); // eslint-disable-line max-len

    const goalsAndAssists = championships
      .map(c => <SortableTable key={c.country + '_goalsAndAssists'} country={c.country} stats={c.stats.goalsAndAssists} numberField={'goalsAndAssists'} {...this.props} />); // eslint-disable-line max-len

    return (
      <Container className="App">
        {tables}
        {tables.length > 0 && <Table key="all" country="all" teams={allTeams} {...this.props} />}
        {goals}
        {assists}
        {goalsAndAssists}
      </Container>
    );
  }
}

export default Soccer;

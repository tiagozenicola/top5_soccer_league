import React, { Component } from 'react';
import Container from './style';
import Table from '../Table';

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
        this.setState(JSON.parse(responseBody).data.championships);
      })
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    const championships = this.state || [];

    console.log(665, championships, Array.from(championships))
    Array.from(championships).map(a => 
      console.log
    )

    const allTeams = Array.from(championships)
      .map(c => {
        console.log(47, c.teams)
        return c.teams;
      })
      .sort((a, b) => {
        if (a.percent < b.percent) {
          return 1;
        }
        if (a.percent > b.percent) {
          return -1;
        }

        return 0;
      });

    console.log(123, allTeams, championships)

    const tables = Array.from(championships)
      .map(c => <Table key={c.country} country={c.country} teams={c.teams} {...this.props} />); // eslint-disable-line max-len

    return (
      <Container className="App">
        {tables}
        {tables.length > 0 && <Table key="all" country="all" teams={allTeams} {...this.props} />}
      </Container>
    );
  }
}

export default Soccer;

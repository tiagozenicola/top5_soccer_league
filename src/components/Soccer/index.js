import React, { Component } from 'react';
import Container from './style';
import Table from '../Table';

const API_URL = 'https://api-soccer22.herokuapp.com/graphql';
const GRAPHQL_REQUEST_BODY = `
{
  tables {
    england {
      ...teamFields
    }
    france {
      ...teamFields
    }
    germany {
      ...teamFields
    }
    italy {
      ...teamFields
    }
    spain {
      ...teamFields
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
        this.setState(JSON.parse(responseBody).data.tables);
      })
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    const teams = this.state || [];

    const allTeams = Object.keys(teams)
      .flatMap(key => teams[key])
      .sort((a, b) => {
        if (a.percent < b.percent) {
          return 1;
        }
        if (a.percent > b.percent) {
          return -1;
        }

        return 0;
      });

    const tables = Object.keys(teams)
      .map(country => <Table key={country} country={country} teams={teams[country]} {...this.props} />); // eslint-disable-line max-len

    return (
      <Container className="App">
        {tables}
        {tables.length > 0 && <Table key="all" country="all" teams={allTeams} {...this.props} />}
      </Container>
    );
  }
}

export default Soccer;

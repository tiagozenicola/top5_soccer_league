import React, { Component } from 'react';
import Container from './style';
import Table from '../Table';

const API_URL = 'https://api-soccer22.herokuapp.com/';

class Soccer extends Component {
  componentDidMount() {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          const errorMessage = 'Error calling site';
          console.error(errorMessage);
          throw new Error(errorMessage);
        }

        return response.text();
      })
      .then((tables) => {
        this.setState(JSON.parse(tables));
      })
      .catch(console.error);
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

    const tables = Object.keys(teams).map(country => <Table key={country} country={country} teams={teams[country]} {...this.props} />);

    return (
      <Container className="App">
        {tables}
        {tables.length > 0 && <Table key="all" country="all" teams={allTeams} {...this.props} />}
      </Container>
    );
  }
}

export default Soccer;

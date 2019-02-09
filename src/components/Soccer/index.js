import React, { Component } from 'react';
import { Block } from 'reakit';
import { Container, StyledHidden } from './style';
import Table from '../Table';
import SortableTable from '../SortableTable';


const API_URL = 'https://api-soccer22.herokuapp.com/graphql';
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
    const { championships } = this.state;

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

    const allGoals = championships
      .flatMap(c => c.stats.goals)
      .sort((a, b) => {
        if (a.goals < b.goals) {
          return 1;
        }
        if (a.goals > b.goals) {
          return -1;
        }

        return 0;
      });

    const allAssists = championships
      .flatMap(c => c.stats.assists)
      .sort((a, b) => {
        if (a.assists < b.assists) {
          return 1;
        }
        if (a.assists > b.assists) {
          return -1;
        }

        return 0;
      });

    const allGoalsAndAssists = championships
      .flatMap(c => c.stats.goalsAndAssists)
      .sort((a, b) => {
        if (a.goalsAndAssists < b.goalsAndAssists) {
          return 1;
        }
        if (a.goalsAndAssists > b.goalsAndAssists) {
          return -1;
        }

        return 0;
      });

    const allGoalsTable = <SortableTable key="allGoalsTable" country="all_goals" stats={allGoals} numberField="goals" {...this.props} />; // eslint-disable-line max-len

    const allAssistsTable = <SortableTable key="allAssistsTable" country="all_assists" stats={allAssists} numberField="assists" {...this.props} />; // eslint-disable-line max-len

    const allGoalsAndAssistsTable = <SortableTable key="allGoalsAndAssistsTable" country="all_goalsAndAssists" stats={allGoalsAndAssists} numberField="goalsAndAssists" {...this.props} />; // eslint-disable-line max-len

    const championshipsWithMoreInformation = championships.map(c => [
      <Table key={c.country} country={c.country} teams={c.teams} {...this.props} />,
      <SortableTable key={`${c.country}_goals`} country={c.country} stats={c.stats.goals} numberField="goals" {...this.props} />,
      <SortableTable key={`${c.country}_assists`} country={c.country} stats={c.stats.assists} numberField="assists" {...this.props} />,
      <SortableTable key={`${c.country}_goalsAndAssists`} country={c.country} stats={c.stats.goalsAndAssists} numberField="goalsAndAssists" {...this.props} />,
    ]);

    const championshipPanels = championships.map((championship, index) => (
      <StyledHidden.Container key={`${championship.country}_panel`} initialState={{ visible: true }}>
        {({ visible, toggle }) => (
          <Block>
            <StyledHidden.Toggle toggle={toggle}>
              {visible ? '[-] ' : '[+] '}
              {championship.country}
            </StyledHidden.Toggle>
            <StyledHidden visible={visible}>
              {championshipsWithMoreInformation[index]}
            </StyledHidden>
          </Block>
        )}
      </StyledHidden.Container>
    ));

    return (

      <Container className="App">

        {championshipPanels}

        {
          championships.length > 0
          && (
          <StyledHidden.Container initialState={{ visible: true }}>
            {({ visible, toggle }) => (
              <Block>
                <StyledHidden.Toggle toggle={toggle}>
                  {visible ? '[-] ' : '[+] '}
                  all
                </StyledHidden.Toggle>
                <StyledHidden visible={visible}>
                  <Table key="all" country="all" teams={allTeams} {...this.props} />
                  {allGoalsTable}
                  {allAssistsTable}
                  {allGoalsAndAssistsTable}
                </StyledHidden>
              </Block>
            )}
          </StyledHidden.Container>
          )}

      </Container>
    );
  }
}

export default Soccer;

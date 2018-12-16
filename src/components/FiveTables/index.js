import React, {Component} from 'react';
import Container from './style'
import Table from '../Table'
import {getTables} from '../Utils/soccer'

class FiveTables extends Component {

  componentDidMount(){
    fetch('https://cors-escape.herokuapp.com/https://www.theguardian.com/football/tables')
      .then(response => {
        if (!response.ok){
          console.error('Error calling site');
        }
        return response.text();
      })
      .then(data => {
        const tables = getTables(data)
        this.setState(tables)
      })
      .catch(console.error);
  }

  render(){
    const teams = this.state || []

    const tables = Object.keys(teams).map(country => {
      return <Table key={country} country={country} teams={teams[country]}/>
    })

    return (
      <Container className="App">
        {tables}
      </Container>
    )
  }
}

export default FiveTables;

import React, {Component} from 'react';
import Container from './style'
import Table from '../Table'

class FiveTables extends Component {

  getTeams = data => {
    const html = this.getAsHtml(data)
    const tables = html.getElementsByTagName('table')
    const majorTables = Array.from(tables).slice(0,5)
    console.log(majorTables);
    console.log(this.getTeamsFromTable(majorTables[0]))
    console.log(this.getTeamsFromTable(majorTables[1]))
    console.log(this.getTeamsFromTable(majorTables[2]))
    console.log(this.getTeamsFromTable(majorTables[3]))
    console.log(this.getTeamsFromTable(majorTables[4]))
    return {teams: html};
  }

  getTeamsFromTable = table => {

    const teams = []

    table.querySelectorAll('tr').forEach((row, index) => {

      if (index === 0 || index === 5){
        return
      }

      const columns = row.querySelectorAll('td')

      teams.push({
        "name": columns[1].innerText,
        "games_played": columns[2].innerText,
        "win": columns[3].innerText,
        "drawn": columns[4].innerText,
        "lost": columns[5].innerText,
        "goals_for": columns[6].innerText,
        "goals_against": columns[7].innerText,
        "goal_difference": columns[8].innerText,
        "points": columns[9].innerText,
        "history": columns[10].innerText,
      })

    })
    return teams
  }

  getAsHtml = text => {
    const template = document.createElement('ghostElement');
    template.innerHTML = text
    return template
  }

  componentDidMount(){
    fetch('https://cors-escape.herokuapp.com/https://www.theguardian.com/football/tables')
      .then(response => {
        if (!response.ok){
          console.error('Error calling site');
        }
        return response.text();
      })
      .then(data => {
        this.setState(this.getTeams(data))
      })
      .catch(console.error);
  }

  render(){
    return (
      <Container className="App">
        <Table country='englad'/>
        <Table country='spain'/>
        <Table country='germany'/>
        <Table country='italy'/>
        <Table country='france'/>
      </Container>
    )
  }
}

export default FiveTables;

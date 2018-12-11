import React, {Component} from 'react';
import Container from './style'
import Table from '../Table'

class FiveTables extends Component {

  getTables = data => {
    const html = this.getAsHtml(data)
    const tables = html.getElementsByTagName('table')
    const majorTables = Array.from(tables).slice(0,5)
    
    const mapTables = {
      'englad': this.getTeamsFromTable(majorTables[0]),
      'spain': this.getTeamsFromTable(majorTables[1]),
      'germany': this.getTeamsFromTable(majorTables[2]),
      'italy': this.getTeamsFromTable(majorTables[3]),
      'france': this.getTeamsFromTable(majorTables[4]),
    }

    return mapTables;
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
        "history": [],
        "percent": columns[9].innerText / (columns[2].innerText * 3),
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
        const tables = this.getTables(data)
        console.log('setState', typeof(tables), tables)
        this.setState(tables)
      })
      .catch(console.error);
  }

  render(){
    const teams = this.state || []
    console.log('renbder', teams)

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

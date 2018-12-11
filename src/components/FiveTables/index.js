import React, {Component} from 'react';
import Container from './style'
import Table from '../Table'

class FiveTables extends Component {

  getTeams = data => {
    const html = this.getAsHtml(data)
    const tables = html.getElementsByTagName('table')
    const majorTables = Array.from(tables).slice(0,5)
    console.log(majorTables)
    return {teams: html};
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

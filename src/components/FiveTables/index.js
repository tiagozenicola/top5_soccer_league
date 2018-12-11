import React, {Component} from 'react';
import Container from './style'
import Table from '../Table'

class FiveTables extends Component {

  componentDidMount(){
    fetch('https://cors-escape.herokuapp.com/https://www.theguardian.com/football/tables')
      .then(response => {
        // debugger;
        console.log(response);
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

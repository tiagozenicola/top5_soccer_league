import React from 'react';
import Container from './style'
import Table from '../Table'

function FiveTables(props){
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

export default FiveTables;

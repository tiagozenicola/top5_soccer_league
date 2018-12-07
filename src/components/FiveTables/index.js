import React from 'react';

import Table from '../Table'

function FiveTables(props){
  return (
    <div className="App">
      <Table country='englad'/>
      <Table country='spain'/>
      <Table country='germany'/>
      <Table country='italy'/>
      <Table country='france'/>
    </div>
  )
}

export default FiveTables;

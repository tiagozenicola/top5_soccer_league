import React, {Component} from 'react';
import Container from './style'

class FavoriteTeams extends Component {

  state = {
    inputValue: 'Digite aqui o nome do seu time',
    favorite_teams: []
  }

  render() {
    const teams = this.state.favorite_teams

    const favorite_teams = Array.from(teams).map(team =>
      <h1 key={team}>{team}</h1>
    )

    return (
      <Container>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button onClick={() => this.saveTeam()}>Add team</button>
        <div>
          {favorite_teams}
        </div>
      </Container>
    )
  }

  updateInputValue = (event) => {
    this.setState({inputValue: event.target.value})
  }

  saveTeam = () => {
    const {favorite_teams, inputValue} = this.state

    if (inputValue === ''){
      alert('Please, choose a team name')
      return
    }

    if (favorite_teams.map((s)=>s.toUpperCase()).includes(inputValue.toUpperCase())){
      alert('Team already exists')
      return
    }

    this.setState({favorite_teams: [...favorite_teams, inputValue]})
  }
  
}

export default FavoriteTeams;

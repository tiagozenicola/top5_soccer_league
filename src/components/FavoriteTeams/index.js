import React, {Component} from 'react';
import Container from './style'

class FavoriteTeams extends Component {

  state = {
    inputValue: 'Digite aqui o nome do seu time',
  }

  render() {
    const {saveTeam, favorite_teams} = this.props

    const teams = Array.from(favorite_teams).map(team =>
      <h1 key={team}>{team}</h1>
    )

    return (
      <Container>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button onClick={() => saveTeam(this.state.inputValue)}>Add team</button>
        <div>
          {teams}
        </div>
      </Container>
    )
  }

  updateInputValue = (event) => {
    this.setState({inputValue: event.target.value})
  }
  
}

export default FavoriteTeams;

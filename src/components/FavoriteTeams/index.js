import React, {Component} from 'react';
import Container from './style'
import { connect } from 'react-redux';
import { addFavoriteTeam, removeFavoriteTeam } from '../../redux';

class FavoriteTeams extends Component {

  state = {
    inputValue: 'Digite aqui o nome do seu time',
  }

  render() {
    const {addFavoriteTeam, removeFavoriteTeam, favoriteTeams} = this.props

    const teams = Array.from(favoriteTeams).map((team, index) =>
      <div key={"div_" + team}>
        <h1 key={team}>{team}
          <button key={"remove_" + team} onClick={() => removeFavoriteTeam(index)}>Excluir</button>
        </h1>
      </div>
    )

    return (
      <Container>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button onClick={() => addFavoriteTeam(this.state.inputValue)}>Add team</button>
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  const { favoriteTeams } = state;
  return {
    favoriteTeams
  };
};

const mapDispatchToProps = {
  addFavoriteTeam, 
  removeFavoriteTeam,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTeams);

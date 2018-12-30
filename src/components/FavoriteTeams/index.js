import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './style';
import { addFavoriteTeam, removeFavoriteTeam } from '../../actions';
import Link from '../atoms/Link';

class FavoriteTeams extends Component {
  state = {
    inputValue: 'Digite aqui o nome do seu time',
  }

  render() {
    const { addFavoriteTeamAction, removeFavoriteTeamAction, favoriteTeams } = this.props;

    const teams = Array.from(favoriteTeams).map((team, index) => (
      <div key={`div_${team}`}>
        <Link key={`remove_${team}`} onClick={() => removeFavoriteTeamAction(index)}>Excluir</Link>
        {team}
      </div>
    ));

    return (
      <Container>
        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} />
        <Link onClick={() => addFavoriteTeamAction(this.state.inputValue)}>Add team</Link>
        <div>
          {teams}
        </div>
      </Container>
    );
  }

  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  }
}

const mapStateToProps = (state) => {
  const { favoriteTeams } = state;
  return {
    favoriteTeams,
  };
};

const mapDispatchToProps = {
  addFavoriteTeamAction: addFavoriteTeam,
  removeFavoriteTeamAction: removeFavoriteTeam,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTeams);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, arrayOf } from 'prop-types';
import Container from './style';
import { addFavoriteTeam, removeFavoriteTeam } from '../../actions';
import Button from '../atoms/Link';

class FavoriteTeams extends Component {
  state = {
    inputValue: 'Digite aqui o nome do seu time',
  }

  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { addFavoriteTeamAction, removeFavoriteTeamAction, favoriteTeams } = this.props;
    const { inputValue } = this.state;

    const teams = Array.from(favoriteTeams).map((team, index) => (
      <div key={`div_${team}`}>
        <Button key={`remove_${team}`} onClick={() => removeFavoriteTeamAction(index)}>Excluir</Button>
        {team}
      </div>
    ));

    return (
      <Container>
        <input type="text" value={inputValue} onChange={this.updateInputValue} />
        <Button onClick={() => addFavoriteTeamAction(inputValue)}>Add team</Button>
        <div>
          {teams}
        </div>
      </Container>
    );
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

FavoriteTeams.propTypes = {
  favoriteTeams: arrayOf(string).isRequired,
  addFavoriteTeamAction: func.isRequired,
  removeFavoriteTeamAction: func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTeams);

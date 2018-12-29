import {
    combineReducers,
    createStore,
  } from 'redux';
  
// actions.js
export const addFavoriteTeam = team => ({
  type: 'ADD_FAVORITE_TEAM',
  team,
});

export const removeFavoriteTeam = teamIndex => ({
  type: 'REMOVE_FAVORITE_TEAM',
  teamIndex
});

// reducers.js
const initialState = ['real madrid', 'juventus', 'psg', 'liverpool']
export const favoriteTeams = (state = initialState, action) => {
  console.log('reducers.js', state, action)
  switch (action.type) {
    case 'ADD_FAVORITE_TEAM':
      return saveTeam([...state], action.team.trim())
    case 'REMOVE_FAVORITE_TEAM':
      return removeTeam([...state], action.teamIndex);
    default:
      return state;
  }
};

const saveTeam = (favoriteTeams, team) => {

  if (team === ''){
    alert('Please, choose a team name')
    return favoriteTeams
  }

  if (favoriteTeams.map((s)=>s.toUpperCase()).includes(team.toUpperCase())){
    alert('Team already exists')
    return favoriteTeams
  }

  return favoriteTeams.concat(team)
}

const removeTeam = (favoriteTeams, index) => {
  favoriteTeams.splice(index, 1)
  return favoriteTeams
}

export const reducers = combineReducers({
  favoriteTeams,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();

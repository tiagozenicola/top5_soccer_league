import {
    combineReducers,
    createStore,
  } from 'redux';
  
// actions.js
export const addFavoriteTeam = team => ({
  type: 'ADD_FAVORITE_TEAM',
  team,
});

export const removeFavoriteTeam = team => ({
  type: 'REMOVE_FAVORITE_TEAM',
  team
});

// reducers.js
export const favoriteTeams = (state = {}, action) => {
  console.log('reducers.js', state, action)
  switch (action.type) {
    case 'ADD_FAVORITE_TEAM':
      return state.concat(action.team)
    case 'REMOVE_FAVORITE_TEAM':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  favoriteTeams,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();

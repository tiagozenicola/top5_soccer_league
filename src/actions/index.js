const addFavoriteTeam = team => ({
  type: 'ADD_FAVORITE_TEAM',
  team,
});

const removeFavoriteTeam = teamIndex => ({
  type: 'REMOVE_FAVORITE_TEAM',
  teamIndex
});

export {addFavoriteTeam, removeFavoriteTeam}

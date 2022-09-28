const initialState = { value: {} };

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'update':
      return { ...state, value: action.payload };
    case 'remove':
      return { ...state, value: {} };
    default:
      return state;
  }
}

function updatePokemon(pokemon) {
  return {
    type: 'update',
    payload: pokemon,
  };
}

function removePokemon() {
  return {
    type: 'remove',
    payload: {},
  };
}

export { updatePokemon, removePokemon, pokemonReducer };

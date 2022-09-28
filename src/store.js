import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './reducers/pokemon.reducer';

export default configureStore({
  devTools: true,
  reducer: {
    pokemon: pokemonReducer,
  },
});

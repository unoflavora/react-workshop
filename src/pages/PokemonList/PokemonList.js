import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { styContainer, styCard, styImage, styWrapper } from './styles';

const GET_POKEMON_LIST = gql`
  query GetPokemonList($limit: Int) {
    pokemons(limit: $limit) {
      count
      results {
        id
        url
        name
        image
      }
    }
  }
`;

function PokemonPage() {
  const { loading, data = {} } = useQuery(GET_POKEMON_LIST, {
    variables: {
      limit: 10,
    },
    fetchPolicy: 'network-only',
  });

  const pokemon = data.pokemons || {};
  const pokemonList = pokemon.results || [];

  return (
    <div className={styContainer}>
      <h1>Pokemon Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styWrapper}>
          {pokemonList.map((item) => {
            return (
              <div className={styCard} key={item.id}>
                <img className={styImage} src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ height: '16px' }} />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default PokemonPage;

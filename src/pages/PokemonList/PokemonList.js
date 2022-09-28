import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

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
  const { loading, data } = useQuery(GET_POKEMON_LIST, {
    variables: {
      limit: 2,
    },
  });

  return (
    <div style={{ padding: '32px', width: '100%' }}>
      <h1>Pokemon Page</h1>
      <p>{`Loading: ${loading}`}</p>
      <div>
        <p>API Result: </p>
        <code>{JSON.stringify(data)}</code>
      </div>
      <div style={{ height: '16px' }} />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default PokemonPage;

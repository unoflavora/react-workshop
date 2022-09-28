import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Button, Card, notification } from 'antd';
import { styContainer, styImage, styWrapper } from './styles';

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

  const handleOpenNotif = (name) => {
    notification.open({
      message: `You Clicked ${name}`,
      description: '',
      type: 'success'
    });
  };

  return (
    <div className={styContainer}>
      <h1>Pokemon Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styWrapper}>
          {pokemonList.map((item) => {
            return (
              <Card title={item.name} key={item.id} onClick={() => handleOpenNotif(item.name)}>
                <img className={styImage} src={item.image} alt="" />
              </Card>
            );
          })}
        </div>
      )}
      <div style={{ height: '16px' }} />
      <Link to="/">
        <Button type="primary">Back to Homepage</Button>
      </Link>
    </div>
  );
}

export default PokemonPage;

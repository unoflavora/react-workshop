import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography, Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../assets/react.svg';
import './Home.css';

function Home() {
  const pokemonValue = useSelector((state) => state.pokemon.value);

  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Typography style={{ color: 'white', fontSize: '20px', marginTop: '16px' }}>Welcome React Workshop</Typography>
        <Typography style={{ color: 'white' }}>Welcome React Workshop - DevCamp 2022</Typography>
      </div>
      <div style={{ padding: '16px' }}>
        <Card title="Your Pokemon">
          <Typography>{pokemonValue.name || 'You still not choose any of them'}</Typography>
          <Image src={pokemonValue.image} />
        </Card>
      </div>
      <Link to="/user">
        <Button type="primary" size="middle" style={{ margin: '8px' }}>
          User
        </Button>
      </Link>
      <Link to="/phone">
        <Button type="primary" size="middle">
          Pokemon List
        </Button>
      </Link>
    </div>
  );
}

export default Home;

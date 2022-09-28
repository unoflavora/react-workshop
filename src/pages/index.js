import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import User from './User';
import PokemonList from './PokemonList';
import Error404 from './404';

const PageIndex = () => (
  <Switch>
    <Route exact path="/user" component={User} />
    <Route exact path="/phone" component={PokemonList} />
    <Route exact path="/" component={Home} />
    <Route component={Error404} />
  </Switch>
);

export default PageIndex;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import Todo from './Todo';
import Blog from './Blog';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todo" component={Todo} />
    <Route exact path="/blog" component={Blog} />
  </Switch>
);

export default App;

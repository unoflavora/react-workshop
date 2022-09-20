import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Todo from './Todo';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todo" component={Todo} />
  </Switch>
);

export default App;

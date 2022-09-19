import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/module-a" component={ModuleA} />
    <Route exact path="/module-b" component={ModuleB} />
  </Switch>
);

export default App;

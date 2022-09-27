import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import User from './User';

const PageIndex = () => (
  <Switch>
    <Route exact path="/user" component={User} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default PageIndex;

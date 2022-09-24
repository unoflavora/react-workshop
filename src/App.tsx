import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhoneList from './pages/PhoneList';
import Layout from './components/Layout';

import './App.css';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={PhoneList} />
    </Switch>
  </Layout>
);

export default App;

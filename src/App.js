import React from 'react';
import { Provider } from 'react-redux';

import RouteApp from './pages';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  uri: 'https://graphql-pokeapi.graphcdn.app/',
});

hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

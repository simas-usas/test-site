import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import resolvers from 'api/resolvers';

import './index.scss';
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  resolvers,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

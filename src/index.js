import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './pages/App';

const MOVIE_BASE_URL = 'https://112qaej5y9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql';

const httpLink = new HttpLink({
  uri: MOVIE_BASE_URL,
  headers: {    
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
    console.log('grapheql error happened');
  }

  if (networkError) {
    // do something with network error
    console.log('network error happened');
  }
});
const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


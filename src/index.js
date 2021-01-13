import React from 'react';
import ReactDOM from 'react-dom';
import client from './apollo';
import App from './components/App';
import { ApolloProvider } from "@apollo/react-hooks";



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Products from './components/Products';


const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Header/>
      <Products />
    </ApolloProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: #E2E6E3;
    font-family: 'Open Sans', sans-serif;
  }
`

export default App;

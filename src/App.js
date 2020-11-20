import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';

import { client } from './api/cache';
import Header from './components/Header';
import Products from './components/products';


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

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`

export default App;

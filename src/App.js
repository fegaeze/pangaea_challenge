import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Products from './components/Products';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Products />
    </>
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

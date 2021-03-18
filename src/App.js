import React from 'react';
import './App.css';
import Products from "./Components/Products"
import styled from 'styled-components'

const EstiloContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 8px;
  height: 100vh;
`

function App() {
  return (
    <EstiloContainer className="App">
      <h1> Filtros </h1>
        <Products />
      <h1> Carrinho </h1>
    </EstiloContainer>
  );
}

export default App;

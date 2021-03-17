import React from 'react';
import './App.css';
import { Filtro } from './Components/Filtro';
import styled from 'styled-components';

const EstiloContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
margin: 8px;
height: 100vh;
`

class App extends React.Component {
  state = {

    filtroMin: 0,
    filtroMax: 1000,
    filtroNome: '',

  }

  onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value })
  }
  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value })
  }
  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value })
  }

  render() {
    return (
      <EstiloContainer>
        <Filtro
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.filtroNome}
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeFiltroMax={this.onChangeFiltroMax}
          onChangeFiltroNome={this.onChangeFiltroNome}
        />
        </EstiloContainer>
    );
  }
}
  export default App;

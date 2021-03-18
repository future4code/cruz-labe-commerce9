import React from "react";
import "./App.css";
import { Filtro } from "./Components/Filtro";
import styled from "styled-components";
import Carrinho from "./Components/Carrinho";

const EstiloContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 8px;
  height: 100vh;
`;

class App extends React.Component {
  state = {
    passagensArray: [
      {
        id: 0,
        nome: "",
        valor: 1,
        imageUrl: "",
        quantidade: 0,
      },
    ],
    filtroMin: 0,
    filtroMax: 1000,
    filtroNome: "",
  };

  // -------------------- FUNÇÕES DO CARRINHO --------------------
  adicionarAoCarrinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const quantidadeCarrinho = passagem.quantidade + 1;
        const passagemCarrinho = {
          ...passagem,
          quantidade: quantidadeCarrinho,
        };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };

  subtrairDoCarrinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const quantidadeCarrinho = passagem.quantidade - 1;
        const passagemCarrinho = {
          ...passagem,
          quantidade: quantidadeCarrinho,
        };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };

  removerDoCarinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const passagemCarrinho = { ...passagem, quantidade: 0 };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };
  // -------------------------------------------------------------

  onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value });
  };
  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value });
  };
  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

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
        <div></div>
        <Carrinho
          adicionarAoCarrinho={this.adicionarAoCarrinho}
          subtrairDoCarrinho={this.subtrairDoCarrinho}
          removerDoCarinho={this.removerDoCarinho}
          passagens={this.state.passagensArray}
        />
      </EstiloContainer>
    );
  }
}
export default App;

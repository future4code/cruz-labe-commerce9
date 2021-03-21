import React from "react";
import PassagensCard from "./PassagensCard";
import styled from "styled-components";

const PassagensContainer = styled.div`
  padding-top:0%;
  margin-top:0;
`;

const PassagensHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  select{
    height: 24px;
  }
  h3, label {
    font-size: 1rem;
    color: #4d4d4d;
    margin: 0;
    font-family: "Trebuchet MS",Arial,sans-serif;
  }
`;

const PassagensGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  text-align: center;
`;


class Passagens extends React.Component {
  state = {
    ordem: "Crescente",
  };

  onChangeFilter = (event) => {
    this.setState({ ordem: event.target.value });
  };

  ordemArray = () => {
    const ordemArray = this.props.passagens.sort((x, y) =>
      this.state.ordem === "Crescente" ? x.valor - y.valor : y.valor - x.valor
    );
    return ordemArray;
  };

  render() {
    let array = this.ordemArray();
    return (
      <PassagensContainer>
        
        <PassagensHeader>
          <h3>Exibindo: {array.length} de {array.length} resultados </h3>
          <div>
            <label>Ordenar por: </label>
            <select onChange={this.onChangeFilter}>
              <option value="Crescente">Menor Preço </option>
              <option value="Decrescente">Maior Preço </option>
            </select>
          </div>
        </PassagensHeader>
        <PassagensGrid>
          {array.map((passagem) => {
            return (
              <PassagensCard
                adicionarAoCarrinho={this.props.adicionarAoCarrinho}
                passagem={passagem}
              />
            );
          })}
        </PassagensGrid>
      </PassagensContainer>
    );
  }
}

export default Passagens;

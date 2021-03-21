import React from "react";
import styled from "styled-components";

const ItemCarrinhoContainer = styled.div `
  font-size: 1.2rem;
  background-color: #F3F3F3;
  margin: 20px;
  line-height: 0.5;
  padding: 15px 0px;

`


class ItemCarrinho extends React.Component {
  render() {
    return (
      <ItemCarrinhoContainer>
        <p>{this.props.passagem.nome}</p>
        <p>${this.props.passagem.valor}</p>
        <p>Quantidade: {this.props.passagem.quantidade}</p>
        <button
          onClick={() => this.props.adicionarAoCarrinho(this.props.passagem.id)}
        >
          ➕
        </button>
        <button
          onClick={() => this.props.subtrairDoCarrinho(this.props.passagem.id)}
        >
          ➖
        </button>
        <button
          onClick={() => this.props.removerDoCarinho(this.props.passagem.id)}
        >
          ❌ REMOVER
        </button>
        
      </ItemCarrinhoContainer>
      
    );
  }
}

export default ItemCarrinho;

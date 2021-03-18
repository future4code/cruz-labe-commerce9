import React from "react";
import styled from "styled-components";

class ItemCarrinho extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.passagem.nome}</p>
        <p>$ {this.props.passagem.valor}</p>
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
      </div>
    );
  }
}

export default ItemCarrinho;

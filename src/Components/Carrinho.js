import React from "react";
import styled from "styled-components";
import ItemCarrinho from "./ItemCarrinho";

class Carrinho extends React.Component {
  valorTotal = () => {
    let valorTotal = 0;

    this.props.passagens.forEach((item) => {
      valorTotal += item.value * item.quantity;
    });
    return valorTotal.toFixed(2);
  };

  render() {
    const filtroCarrinho = this.props.passagens.filter((passagem) => {
      if (passagem.quantity > 0) {
        return true;
      } else {
        return false;
      }
    });

    const carrinho = filtroCarrinho.map((passagem) => {
      return (
        <ItemCarrinho
          adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          subtrairDoCarrinho={this.props.subtrairDoCarrinho}
          removerDoCarinho={this.props.removerDoCarinho}
          passagem={passagem}
        />
      );
    });

    return (
      <div>
        <h2>🛒 Carrinho</h2>
        {carrinho}
        {<h3>Total: 💲 {this.valorTotal()}</h3>}
      </div>
    );
  }
}

export default Carrinho;

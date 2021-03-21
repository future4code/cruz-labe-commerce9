import React from "react";
import styled from "styled-components";
import ItemCarrinho from "./ItemCarrinho";

const CarrinhoContainer = styled.div`
  text-align: center;
  height: 100%;
  border: 3px solid #F3F3F3;
  overflow-y: scroll;
   h3{
  
     color:#5A6FA7;
     font-size:1.2rem;

   }
   h2 {
     font-size: 2.250rem;
     margin-top:10px;
   }

    button {
      color: white;
      margin-top: 15px;
      border-radius: 3px;
      background:#5A6FA7;
      text-align: center;
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 600;
      width: 100px;
      height: 45px;
      border: 1px solid ;
  }
    }
`;

class Carrinho extends React.Component {
  valorTotal = () => {
    let valorTotal = 0;

    this.props.passagens.forEach((item) => {
      valorTotal += item.valor * item.quantidade;
    });
    return valorTotal.toFixed(2);
  };
  

  render() {
    const filtroCarrinho = this.props.passagens.filter((passagem) => {
      if (passagem.quantidade > 0) {
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
          finalizaCompra={this.props.onSubmitFinalizaCompra}
        />
      );
    });

    return (
      <CarrinhoContainer>
        <h2>&#128722;</h2>
        {<h3> Total: &#65284; {this.valorTotal()} </h3>}
        
        {carrinho}
        <button onClick = {() => this.props.finalizaCompra()}>Finalizar compra</button>
      </CarrinhoContainer>
    );
  }
}

export default Carrinho;

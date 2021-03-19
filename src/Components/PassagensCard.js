import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  img {
    height: 300px;
  }
`;

const CardsPassagem = styled.div``;

class PassagensCard extends React.Component {
  render() {
    const passagem = this.props.passagem;
    return (
      <CardsContainer>
        <img src={passagem.imageUrl} />
        <CardsPassagem>
          <p>{passagem.nome}</p>
          <p>$ {passagem.valor}</p>
          <button onClick={() => this.props.adicionarAoCarrinho(passagem.id)}>
            Comprar
          </button>
        </CardsPassagem>
      </CardsContainer>
    );
  }
}

export default PassagensCard;

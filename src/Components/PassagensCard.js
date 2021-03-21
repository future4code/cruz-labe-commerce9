import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  img {
    height: 265px;
  }
  width: 100%;
  border: 1px solid var(--color-gray-4);
  box-shadow: 0 4px 8px rgb(68 68 68 / 50%);
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 15px;
  font-size: 1.3rem;
  font-weight: 600;
  }

`;

const CardsPassagem = styled.div`
  h5,h6 {
    text-align:justify;
    padding-left:15px;
    line-height:0.5; 
  }
  p {
    font-size: 1rem;
    line-height:0.5;
  }
  button {
    color: white;
    border-radius: 3px;
    outline: 0;
    background-color: #5A6FA7;
    text-align: center;
    text-transform: up.875rempercase;
    font-size: .875rem;
    font-weight: 600;
    width: 121px;
    height: 36px;
    padding: 10px 15px;
    margin: 0;
    opacity: .9;
    border: 1px solid #5A6FA7;

  }
  
`;

class PassagensCard extends React.Component {
  render() {
    const passagem = this.props.passagem;
    return (
      <CardsContainer>
        <img src={passagem.imageUrl} />
        <CardsPassagem>
          <h5>Pacotes para {passagem.nome}</h5>
          <h6>Saindo da Terra</h6>
        
          <hr/>
          <p>Preço por pessoa</p>
          <p>${passagem.valor}</p>
          <button onClick={() => this.props.adicionarAoCarrinho(passagem.id)}>
            Comprar
          </button>
        </CardsPassagem>
      </CardsContainer>
    );
  }
}

export default PassagensCard;

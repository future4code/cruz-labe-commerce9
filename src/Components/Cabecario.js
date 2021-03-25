import React from "react";
import styled from "styled-components";
import logovaza from "../img/logovaza.png";

const CabecarioCovid = styled.div`
    height: 35px;
    width: 100%;
    background-color: #0B3D92;
    margin: 0 auto;
`;

const LinkCovid =styled.a`
    display: flex;
    justify-content:center;
    align-items: center;
    color:white;
    text-decoration: none;
    padding-top: 5px;
`;

const CabecarioLogo = styled.div`
    height: 70px;
    width: auto;
    background-color: #5A6FA7;
    width:1520px;
    color:white;
`;

const ImgLogo = styled.img `
    width: 150px;
    padding-top: 10px;
    position: absolute;
    left:120px;
`;


const Parcela = styled.h3 `
  font-size: 1.8rem;
  width:50%;
  position:absolute;
  left: 23%;
  padding: 15px 16px; 
  margin:0;
  text-align: center;
`

export class Cabecario extends React.Component {
    render () {
        return (
            <div>
                <CabecarioCovid >
                    <LinkCovid href = " https://covid.saude.gov.br/">Quer saber se pode viajar? - Informações Covid-19 </LinkCovid>
                </CabecarioCovid>
                
                <CabecarioLogo>
                    <ImgLogo src={logovaza}  alt="logo" />
                    <Parcela>&#128640;TODO O SITE COM 60% DE DESCONTO</Parcela>
                </CabecarioLogo>               
            </div>
        )
    }
}

export default Cabecario;
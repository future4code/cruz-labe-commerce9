import React from 'react';
import styled from "styled-components";
import clientesemmarte from "../img/clientesemmarte.png"
import karinacliente from "../img/karinacliente.png"
import clientesasgard from "../img/clientesasgard.png"
import silvanacliente from "../img/silvanacliente.png"
import clientesemdagobah from "../img/clientesemdagobah.png"
import juliocliente from "../img/juliocliente.png"
import clienteasgard from "../img/clienteasgard.png"
import joaocliente from "../img/joaocliente.png"


const ClientesContainer = styled.div `
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    padding-left: 130px;
    justify-content: center;


` 

const InfoClientesContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color:white;
    
`

const ClienteImg = styled.img`

    width:300px;
    
`

const ClienteH3 = styled.h3 `


`

const clientes = () => {
    const clientesLista = [
        {
            id: 1,   
            imageUrl: clientesemmarte,
            depoimentoImageHover: karinacliente,
            
        },
        {
            id: 2,      
            imageUrl: clientesasgard,
            depoimentoImageHover: silvanacliente,
            
        },
        {
            id: 3,      
            imageUrl: clientesemdagobah,
            depoimentoImageHover: juliocliente,
            
        },
        {
            id: 4,      
            imageUrl: clienteasgard,
            depoimentoImageHover: joaocliente,
            
        },
    ]

   
      
    const clientesEmComponentes = clientesLista.map((cliente) => {
        return (

                <InfoClientesContainer key={cliente.id}>
                    
                    <ClienteImg src= {cliente.imageUrl}
                    onMouseOver={e => e.currentTarget.src = cliente.depoimentoImageHover}
                    onMouseOut={e => e.currentTarget.src = cliente.imageUrl}
                    alt="clientes" />
                                       
                </InfoClientesContainer>
                
        )
    })
    
        return (
            <ClientesContainer>
                {clientesEmComponentes}
            </ClientesContainer>
        )
} 

export default clientes;

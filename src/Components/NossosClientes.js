import React from "react";
import styled from "styled-components";
import Clientes  from './Clientes'
import imagemastronauta from "../img/imagemastronauta.png"


const NossosClientesContainer = styled.div`
    height: 550px;
    width: 100%;
    background-color: #5A6FA7;
    
`
const HeaderNossosclientes = styled.div `
    display:flex;
    align-items:center;
`

const TituloNossosClientes = styled.h3`
    font-size: 2.0rem;
    margin-left: 100px;
    color: white;
`

const ImagemAstronauta = styled.img`
    width: 100px;
    margin-bottom: 45px;
`

export class NossosClientes extends React.Component {
    render () {
        return (
            <NossosClientesContainer>
                <HeaderNossosclientes>
                    <TituloNossosClientes>Clientes que viajaram conosco</TituloNossosClientes>
                    <ImagemAstronauta src = {imagemastronauta} />
                </HeaderNossosclientes>
                
                <Clientes/>
                
            </NossosClientesContainer>
        )
    }
}

export default NossosClientes;
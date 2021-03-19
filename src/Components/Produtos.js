import React from 'react';
import ProdutosCard from './ProdutosCard'
import styled from 'styled-components'


const ContainerCabecarioProdutos = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    

`

const ContainerQuantidade = styled.p`
    padding: 10px 25px;
`

const ContainerOrdencao = styled.div`
    display: flex;
    flex-direction:row;
    padding: 10px 25px;
    
    
`
const Select = styled.select`
    height: 25px;
    width: 100px;
    margin-top: 15px;
    margin-left: 15px;

     
`

export default class Produtos extends React.Component {
    
    state = {
        optionValue: "",
    }

    onChangeFilter = (event) => {
        this.setState({optionValue: event.target.value})
    }

    render () {

        return (
            <div>
                
                <ContainerCabecarioProdutos>
                    <ContainerQuantidade> Quantidade de Produtos: </ContainerQuantidade>
                    <ContainerOrdencao>
                        <p>Ordenação: </p>
                        <Select value={this.state.filter} onChange={this.onChangeFilter}>
                            <option value="">Nenhum</option>
                            <option value="Decrescente">Decrescente </option>
                            <option value="Crescente">Crescente </option>
                        </Select>
                    </ContainerOrdencao>
                    

                </ContainerCabecarioProdutos>
                <ProdutosCard />
            </div>
        )
    }





}

// {quantityProducts}
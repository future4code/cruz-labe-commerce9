import React from 'react';
import ProductsCard from './ProductsCard'
import styled from 'styled-components'

const ContainerProducts = styled.div` 

`

const ContainerHeaderProducts = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    

`

const ContainerQuantity = styled.p`
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

export default class Products extends React.Component {
    
    state = {
        optionValue: "",
    }

    onChangeFilter = (event) => {
        this.setState({optionValue: event.target.value})
    }

    render () {

        return (
            <ContainerProducts>
                
                <ContainerHeaderProducts>
                    <ContainerQuantity> Quantidade de Produtos: </ContainerQuantity>
                    <ContainerOrdencao>
                        <p>Ordenação: </p>
                        <Select value={this.state.filter} onChange={this.onChangeFilter}>
                            <option value="">Nenhum</option>
                            <option value="Decrescente">Decrescente </option>
                            <option value="Crescente">Crescente </option>
                        </Select>
                    </ContainerOrdencao>
                    

                </ContainerHeaderProducts>
                <ProductsCard />
            </ContainerProducts>
        )
    }





}

// {quantityProducts}
import React from "react";
import styled from "styled-components";

const EstiloLabelFiltro = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  font-family: "Trebuchet MS";
  font-size: 1rem;  
`;
const EstiloFiltro = styled.div`
  padding: 50px;
  background-color: #F3F3F3;
  box-shadow: 0 4px 8px rgb(68 68 68 / 15%);
  height: 40vh;
    button {
      color: #5A6FA7;
      margin-top: 20px;
      border-radius: 3px;
      background: white;
      text-align: center;
      text-transform: uppercase;
      font-size: .875rem;
      font-weight: 600;
      width: 121px;
      height: 36px;
      border: 1px solid #5A6FA7;
    }
  }
  
 `
const InputFiltro = styled.input `
  width: 100%;
  border: 1px solid var(--color-gray-4);
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 1.0rem;
  font-weight: 600;
  
`  

export class Filtro extends React.Component {
  render() {
    return (
      <EstiloFiltro>
        <h2>Filtros</h2>
        <EstiloLabelFiltro>
          Valor mínimo:
          <InputFiltro
            type="number"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
          />
        </EstiloLabelFiltro>
        <EstiloLabelFiltro>
          Valor máximo:
          <InputFiltro
            type="number"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
          />
        </EstiloLabelFiltro>
        <EstiloLabelFiltro>
          Busca por nome:
          <InputFiltro
            type="text"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
          />
        </EstiloLabelFiltro>
        <button onClick={this.props.limparFiltro}>Limpar</button>
      </EstiloFiltro>
    );
  }
}

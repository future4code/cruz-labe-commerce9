import React from "react";
import styled from "styled-components";

const EstiloLabelFiltro = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px;
  padding-left: 4px;
`;
const EstiloFiltro = styled.div`
  border: 1px solid;
  width: 100%;
  padding: 8px;
`;

export class Filtro extends React.Component {
  render() {
    return (
      <EstiloFiltro>
        <h3>Filtros</h3>
        <EstiloLabelFiltro>
          Valor mínimo:
          <input
            type="number"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
          />
        </EstiloLabelFiltro>
        <EstiloLabelFiltro>
          Valor máximo:
          <input
            type="number"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
          />
        </EstiloLabelFiltro>
        <EstiloLabelFiltro>
          Busca por nome:
          <input
            type="text"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
          />
        </EstiloLabelFiltro>
      </EstiloFiltro>
    );
  }
}

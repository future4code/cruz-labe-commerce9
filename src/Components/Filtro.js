import React from "react";
import styled from "styled-components";

const EstiloLabelFiltro = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
`;
const EstiloFiltro = styled.div`
  padding: 8px;
`;

export class Filtro extends React.Component {
  render() {
    return (
      <EstiloFiltro>
        <h2>Filtros</h2>
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
        <button onClick={this.props.limparFiltro}>Limpar</button>
      </EstiloFiltro>
    );
  }
}

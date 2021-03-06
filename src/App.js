import React from "react";
import "./App.css";
import { Filtro } from "./Components/Filtro";
import styled from "styled-components";
import Carrinho from "./Components/Carrinho";
import Passagens from "./Components/Passagens";
import Cabecario from "./Components/Cabecario";
import NossosClientes from "./Components/NossosClientes";
import Rodape from "./Components/Rodape";


const Body = styled.div`
  font-family: "Trebuchet MS",Arial,sans-serif;
  display: flex;
  flex-direction:column;
  margin: 0 auto;
`;

const EstiloContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 8px;
  padding-top:65px;
  padding-left:70px;

`;

class App extends React.Component {
  state = {
    passagensArray: [
      {
        id: 0,
        nome: "Venus",
        valor: 15000.00,
        imageUrl:
          "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale",
        quantidade: 0,
      },
      {
        id: 1,
        nome: "Marte",
        valor: 10000.00,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
        quantidade: 0,
      },
      {
        id: 2,
        nome: "Saturno",
        valor: 5000.00,
        imageUrl:
          "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg",
        quantidade: 0,
      },
      {
        id: 3,
        nome: "Jupiter",
        valor: 135000.00,
        imageUrl:
          "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
        quantidade: 0,
      },
      {
        id: 4,
        nome: "Asgard",
        valor: 95500.00,
        imageUrl:
          "https://fastly.4sqi.net/img/general/200x200/14230145_7d_kRyBPk1F4jYm4tiVGLHR66Yn7WoHctHd53HIuRpo.jpg",
        quantidade: 0,
      },
      {
        id: 5,
        nome: "Dagobah",
        valor: 90000.00,
        imageUrl: "https://f4.bcbits.com/img/a0980289374_10.jpg",
        quantidade: 0,
      },
    ],
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
    inputEmail: "",
  };

  // -------------------- FUN????ES DO CARRINHO --------------------
  adicionarAoCarrinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const quantidadeCarrinho = passagem.quantidade + 1;
        const passagemCarrinho = {
          ...passagem,
          quantidade: quantidadeCarrinho,
        };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };

  subtrairDoCarrinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const quantidadeCarrinho = passagem.quantidade - 1;
        const passagemCarrinho = {
          ...passagem,
          quantidade: quantidadeCarrinho,
        };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };

  removerDoCarinho = (id) => {
    const carrinhoArray = this.state.passagensArray.map((passagem) => {
      if (passagem.id === id) {
        const passagemCarrinho = { ...passagem, quantidade: 0 };
        return passagemCarrinho;
      } else {
        return passagem;
      }
    });
    this.setState({ passagensArray: carrinhoArray });
  };
  // -------------------------------------------------------------

  onChangeFiltroMin = (event) => {
    this.setState({ filtroMin: event.target.value });
  };
  onChangeFiltroMax = (event) => {
    this.setState({ filtroMax: event.target.value });
  };
  onChangeFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  };
  onSubmitFinalizaCompra = (event) => {
    alert ("Compra realizada com sucesso!")
  };
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  }
  onSubmitEmailCadastro = () => {  
     
    alert("E-mail cadastrado com sucesso!")
  }

  limparFiltro = () => {
    this.setState({
      filtroMin: "",
      filtroMax: "",
      filtroNome: "",
    });
  };

  filtroPassagensArray = (min, max, texto) => {
    let filtragemPorValor;
    if (min || max) {
      // Se min e max estiverem vazios ou = 0. Caso contr??rio, pula o filtro por valor.
      filtragemPorValor = this.state.passagensArray.filter((passagem) => {
        if (min && !max) {
          // Se min n??o estiver vazio ou === 0 e max sim.
          return passagem.valor >= min;
        } else if (!min && max) {
          // Se max n??o estiver vazio ou === 0 e min sim.
          return passagem.valor <= max;
        } else if (min && max) {
          // Se min e max n??o estiverem vazios ou !== 0
          return passagem.valor >= min && passagem.valor <= max;
        }
      });
    } else {
      filtragemPorValor = this.state.passagensArray;
    }

    let filtragemCompleta;
    if (texto) {
      // Se o campo de busca por nome n??o estiver vazio. Caso contr??rio, pula o filtro por texto.
      filtragemCompleta = filtragemPorValor.filter((passagem) => {
        return passagem.nome.toLowerCase().includes(`${texto.toLowerCase()}`);
      });
    } else {
      filtragemCompleta = filtragemPorValor;
    }
    return filtragemCompleta;
  };

  render() {
    let filtroArray = this.filtroPassagensArray(
      this.state.filtroMin,
      this.state.filtroMax,
      this.state.filtroNome
    );
    
    return (
      <Body> 
        <Cabecario/>
        <EstiloContainer>
          <Filtro
            onChangeFiltroMin={this.onChangeFiltroMin}
            onChangeFiltroMax={this.onChangeFiltroMax}
            onChangeFiltroNome={this.onChangeFiltroNome}
            limparFiltro={this.limparFiltro}
            filtroMin={this.state.filtroMin}
            filtroMax={this.state.filtroMax}
            filtroNome={this.state.filtroNome}
          />
          <Passagens
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            passagens={filtroArray}
          />
          
          <Carrinho
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            subtrairDoCarrinho={this.subtrairDoCarrinho}
            removerDoCarinho={this.removerDoCarinho}
            passagens={this.state.passagensArray}
            finalizaCompra ={this.onSubmitFinalizaCompra}
          />
        </EstiloContainer>
        <NossosClientes />
        <Rodape 
        emailCadastrado={this.onSubmitEmailCadastro}
        />
      </ Body>
      
      
    );
  }
}
export default App;

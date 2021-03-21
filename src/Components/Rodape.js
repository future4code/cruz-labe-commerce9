import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube} from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { SiTwitter } from "react-icons/si";



const RodapeContainer = styled.div`
    height: 180px;
    width:100%;
    background-color:#0B3D92;
    margin: 0 auto;
    text-align:center;
    color:white;
    input {
        width: 25%;
        padding:10px;
        margin: 10px;
    }
    button{
        background-color: white;
        border-radius:53px;
        color:#5A6FA7;
        border-color: #3498db;
        color: #fff;
        box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
        padding:10px;
        margin: 10px;
    }
`
const Cadastro = styled.div `
    display:flex;
    justify-content: center;


`
const RedesSociais = styled.div `
    padding-top: 15px;
    a:hover, a:visited, a:active, a:link {
        text-decoration: none;
        color:white;
    }
`

export class Rodape extends React.Component {
    render () {
        return (
                <RodapeContainer >
                    <h3> Inscreva-se para receber ofertas exclusivas</h3>
                    
                    <Cadastro>
                    <input
                    type="text"
                    value={this.props.inputEmail}
                    onChange={this.props.onChangeInputEmail}
                    placeholder = "Digite seu e-mail aqui"/>
                    <button onClick = {this.props.emailCadastrado}> Quero recebê-las!</button>
                    </Cadastro>

                    <RedesSociais>
                        <a href = {"https://www.instagram.com/"}> <FaInstagram size = {20}/> </a>
                        <a href= {"https://www.youtube.com/"}> <FiYoutube size = {20}/> </a>
                        <a href= {"https://www.gmail.com/"}> <SiGmail size = {20}/> </a>
                        <a href= {"https://www.twitter.com/"}> <SiTwitter size = {20}/> </a>
                        
                    </RedesSociais>


                </RodapeContainer >
        )
    }
}

export default Rodape;
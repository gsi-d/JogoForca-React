import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"
import styled from "styled-components"


export default function Jogo(props){
    const {iniciarJogo, palavraSorteada, palavraExibida, erros} = props
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    return (
        <ContainerForca>
            <img src={imagens[erros]} />
            <BotaoEscolher disabled={palavraSorteada != "" ? true : false} onClick={iniciarJogo} >Escolher palavra</BotaoEscolher>
            <Palavra>{palavraExibida}</Palavra>
        </ContainerForca>
    )
}

const ContainerForca = styled.div`
    display: flex;
    align-items: flex-end;
    width: 700px;
    margin-bottom: 50px;
    position: relative;
    justify-content: space-between;
    img {
        width: 400px;
    }
`

const BotaoEscolher = styled.button`
    background-color: #27ae60;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 20px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 30px;
    min-width: 150px;
`

const Palavra = styled.h1`
    font-size: 40px;
    margin-right: 5px;
    font-family: "Segoe UI";
    
`
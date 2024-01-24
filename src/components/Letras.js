import alfabeto from "../alfabeto"
import styled from "styled-components"

export default function Letras(props){
    const {letrasUsadas, cliqueDaLetra} = props
    return (
        <ContainerLetras>
            {alfabeto.map(letra => (
                <BotaoLetra key={letra} onClick={() => cliqueDaLetra(letra)} disabled={letrasUsadas.includes(letra) ? true : false} >{letra}</BotaoLetra>
            ))}
        </ContainerLetras>
    )
}

const ContainerLetras = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 630px;
    margin-left: 50px;
    align-items: center;
`

const BotaoLetra = styled.button`
    width: 40px;
    height: 40px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    color: #39739d;
    margin: 4px;
    &:hover {
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }
    &:disabled {
        background-color: #9faab5;
        border: 1px solid #9faab5;
        color: #79818a;
        cursor: default;
    }
`
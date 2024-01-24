import styled from "styled-components"

export default function Chute(props){
    const {letrasUsadas, cliqueChute, palavraPalpite, setPalavraPalpite} = props
    return (
        <ContainerInput>
            <InputChute value={palavraPalpite} onChange={e => setPalavraPalpite(e.target.value)} disabled={letrasUsadas.length !== 26 ? false : true}></InputChute>
            <BotaoChutar onClick={() => cliqueChute()} disabled={letrasUsadas.length !== 26 ? false : true}>Enviar</BotaoChutar>
        </ContainerInput>
    )
}

const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 630px;
    margin-left: 50px;
    span {
        font-family: "Segoe UI";
        font-size: 18px;
        margin-right: 10px;
    }
`

const BotaoChutar = styled.button`
    background-color: #e1ecf4;
    border-radius: 5px;
    border: 1px solid #7aa7c7;
    font-size: 14px;
    font-weight: 800;
    color: #39739d;
    margin: 4px;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }
`

const InputChute = styled.input`
    height: 12px;
    width: 300px;
    border-radius: 5px;
    margin-right: 10px;
    padding: 10px;
    font-family: "Segoe UI";
    font-size: 15px;
`
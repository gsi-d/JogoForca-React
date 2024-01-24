import { useState } from "react"
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import alfabeto from "./alfabeto"
import palavras from "./palavras"

export default function App() {
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)
  const [palavraSorteada, setPalavraSorteada] = useState("")
  const [palavraPalpite, setPalavraPalpite] = useState("")
  const [palavraExibida, setPalavraExibida] = useState([])
  const [erros, setErros] = useState(0)
  
  function iniciarJogo(){
    sorteiaPalavra()
    setLetrasUsadas([])
  }

  function sorteiaPalavra(){
    const randomDecimal = Math.random();
    let indiceAleatorio = Math.floor(randomDecimal * (palavras.length) + 1)
    let palavraEscolhida = palavras[indiceAleatorio]
    setPalavraSorteada(palavraEscolhida)
    let palavraParaExibir = palavraEscolhida.split("")
    palavraParaExibir.fill(" _")
    setPalavraExibida(palavraParaExibir)
    console.log(palavraEscolhida)
    console.log(palavraParaExibir)
  }

  function cliqueDaLetra(letra){
    let letrasUsadasAux = [...letrasUsadas, letra]
    setLetrasUsadas(letrasUsadasAux)

    if(palavraSorteada.includes(letra)){
      atualizaPalavraExibida(letra)
    }else{
      atualizaNovoErro()
    }
  }

  function atualizaPalavraExibida(letra){
    let plvraSorteada = palavraSorteada.split("")
    let palavraEscolhidaAux = palavraExibida
    plvraSorteada.forEach((elemento, indice) =>
    { 
      if(elemento === letra){
        palavraEscolhidaAux[indice] = letra
      }
    })

    let stringPalavra = palavraEscolhidaAux.join("")
    console.log(stringPalavra)
    if(stringPalavra === palavraSorteada){
      vencedor()
      fimJogo()
    }
    setPalavraExibida(palavraEscolhidaAux)
  }

  function atualizaNovoErro(){
    let qtdErrosAtualizada = erros + 1
    setErros(qtdErrosAtualizada)
    if(qtdErrosAtualizada >= 6){
      perdedor()
      fimJogo()
    }
  }
  function cliqueChute(){
    if(palavraPalpite === palavraSorteada){
      vencedor()
      fimJogo()
    }else{
      perdedor()
      fimJogo()
    }
  }

  function vencedor(){
    setPalavraExibida(palavraSorteada)
    alert("Parabéns! Você ganhou o jogo.")
  }

  function perdedor(){
    setPalavraExibida(palavraSorteada)
    alert("Não foi dessa vez :( A palavra correta era '"+ palavraSorteada +"'. Tente novamente!")
  }

  function fimJogo(){
    setPalavraSorteada("")
    setPalavraExibida("")
    setPalavraPalpite("")
    setErros(0)
    setLetrasUsadas(alfabeto)
  }

  return (
    <div >
      <Jogo iniciarJogo={iniciarJogo} palavraSorteada={palavraSorteada} palavraExibida={palavraExibida} erros={erros}/>
      <Letras letrasUsadas={letrasUsadas} cliqueDaLetra={cliqueDaLetra}/>
      <Chute letrasUsadas={letrasUsadas} cliqueChute={cliqueChute} palavraPalpite={palavraPalpite} setPalavraPalpite={setPalavraPalpite}/>
    </div>
  );
}
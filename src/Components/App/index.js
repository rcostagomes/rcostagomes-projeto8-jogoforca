import React from "react";
import forca0 from "../../Assets/img/forca0.png";
import forca1 from "../../Assets/img/forca1.png";
import forca2 from "../../Assets/img/forca2.png";
import forca3 from "../../Assets/img/forca3.png";
import forca4 from "../../Assets/img/forca4.png";
import forca5 from "../../Assets/img/forca5.png";
import forca6 from "../../Assets/img/forca6.png";
import { Main, Center, Options, Footer, Palavra } from "./style";
import { palavras } from "../palavras";

export default function App() {
  const [contador, setContador] = React.useState(0);
  const Vida = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [palavra, setPalavra] = React.useState("");
  const [PalavraOC, setPalavraOC] = React.useState();
  const [SecretPalavra, setSecretPalavra] = React.useState("");
  const [listaClicada, setListaClicada] = React.useState([]);
  const [erros, setErros] = React.useState([]);
  const [imagem, setImagem] = React.useState(Vida[contador]);
  const [palavraNoFim, setPalavraNoFim] = React.useState("palavraForca");
  const [TelaPerdeu, setTelaperdeu] = React.useState()
  const [TelaGanhou, setTelaGanhou] = React.useState()
  const [CorLetras, setCorLetras] = React.useState()
  const arrayImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  console.log(SecretPalavra);

  // Botoes das letras--------------------------------//
  function Letras(props) {
    return (
      <button
        onClick={() => verificar(`${props.letra}`)}
        style={{ backgroundColor: `${props.color}` }}
      >
        {props.letra}
      </button>
    );
  }

  // ------------------------------------------------ //
  function chutar(){
    let chutado = document.querySelector(".Chute").value;
    if(chutado === SecretPalavra){

      setPalavraNoFim("palavraForcaVitoria");
      setCorLetras("green")
      setTelaGanhou( <h1> "Você Ganhou" </h1>) 
      setPalavraOC(SecretPalavra)
    }
    else{
     setPalavraNoFim("palavraForcaDerrota");
        setImagem(arrayImagens[6])
        setCorLetras("Red")
        setTelaperdeu( <h1 > "Você perdeu" </h1>)   
        setPalavraOC(SecretPalavra)
    }
  }

  /* Sorteia a posição da palavra, pega o index dela, renderezia ela e oculta,
   cria os underline pelo numero de letras*/

  function criarPalavra() {
    setTelaperdeu()
    setTelaGanhou()
  

    const index = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(index)
    const palavraSemAcento = index.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setSecretPalavra(palavraSemAcento);
    setPalavra(index);
    setPalavraOC(index[0].replace(/[^0]/g, "_ "));
    setImagem(arrayImagens[0]);
    setListaClicada([]);
    setPalavraNoFim("palavraForca");
    setErros([]);
  }
  // ----------------------------------------------------------------------------//

  function verificar(letra) {
    const novaLista = [...listaClicada, letra];
    setListaClicada(novaLista);

    if (palavra.includes(letra)) {
      const novasLetras = [...listaClicada, letra];
      const arrayLetras = SecretPalavra.split("");
      const palavraCerta = arrayLetras.map((TL) =>
        novasLetras.includes(TL) ? TL : "_"
      );
      const palavraCertaFinal = palavraCerta.join(" ");
      const SemEspaço = palavraCertaFinal.trim()
      setPalavraOC(palavraCertaFinal);
      console.log(PalavraOC);
      console.log(SemEspaço)
      console.log(SecretPalavra)
      if (SemEspaço == PalavraOC) {
        console.log("entrou")
        setPalavraOC(palavra);
        setPalavraNoFim("palavraForcaVitoria");
        setCorLetras("green")
        setTelaGanhou( <h1> "Você Ganhou" </h1>) 
      }
    } else {
      const novosErros = [...erros, letra];
      setErros(novosErros);
      setContador(contador + 1);
      setImagem(Vida[contador + 1]);
      if (contador === 6) {
        setPalavraOC(palavra);
        setPalavraNoFim("palavraForcaDerrota");
        setImagem(arrayImagens[0])
        setCorLetras("Red")
        setTelaperdeu( <h1 > "Você perdeu" </h1>)                          
      }
    }
  }

  
// ----------------------------------------------------------------------------
const TodasLetras = [
  { letra: "a", color: "#e1ecf4" },
  { letra: "b", color: "#e1ecf4" },
  { letra: "c", color: "#e1ecf4" },
  { letra: "d", color: "#e1ecf4" },
  { letra: "e", color: "#e1ecf4" },
  { letra: "f", color: "#e1ecf4" },
  { letra: "g", color: "#e1ecf4" },
  { letra: "h", color: "#e1ecf4" },
  { letra: "i", color: "#e1ecf4" },
  { letra: "j", color: "#e1ecf4" },
  { letra: "k", color: "#e1ecf4" },
  { letra: "l", color: "#e1ecf4" },
  { letra: "m", color: "#e1ecf4" },
  { letra: "n", color: "#e1ecf4" },
  { letra: "o", color: "#e1ecf4" },
  { letra: "p", color: "#e1ecf4" },
  { letra: "q", color: "#e1ecf4" },
  { letra: "r", color: "#e1ecf4" },
  { letra: "s", color: "#e1ecf4" },
  { letra: "t", color: "#e1ecf4" },
  { letra: "u", color: "#e1ecf4" },
  { letra: "v", color: "#e1ecf4" },
  { letra: "w", color: "#e1ecf4" },
  { letra: "x", color: "#e1ecf4" },
  { letra: "y", color: "#e1ecf4" },
  { letra: "z", color: "#e1ecf4" },
];

return (
  <>
    <Main>
      <Center>
        <div>
          <img src={imagem} alt="Forca" />
          <Palavra>
            <div> 
            <span style={{color: `${CorLetras}`}}> {TelaPerdeu} {TelaGanhou} </span>
            <span > {PalavraOC}</span> 
            </div>
          </Palavra>
        </div>

        <button onClick={criarPalavra}> Escolher Palavra </button>
      </Center>
      <Options>
        {TodasLetras.map((TL, index) => (
          <Letras key={index} letra={TL.letra} />
        ))}
      </Options>

      <Footer>
        <strong> Já sei a palavra</strong> <input data-identifier="type-guess" className="Chute" />
        <button onClick={chutar}>Chutar</button>
      </Footer>
    </Main>
  </>
);
}

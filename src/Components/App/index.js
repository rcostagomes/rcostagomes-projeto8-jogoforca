import React from "react";
import forca from "../../Assets/img/forca0.png";
import removeAccents from "remove-accents"
import { Main, Center, Options, Footer, Palavra } from "./style";
import { palavras } from "../palavras";

export default function App() {
  const [linhas, setLinhas] = React.useState("");
  const [SecretPalavra, setPalavra] = React.useState("");
  const NewPalavra = removeAccents(SecretPalavra).toUpperCase();
  console.log(NewPalavra);
console.log(SecretPalavra)
  // Botoes das letras ------------------------------------------------------------------------------------
function Letras(props) {
  const [cor, setCor] = React.useState(props.color);

  // Verificar a letra e altera a cor do botão que foi selecionado-------------
  function verificar(letra) {
    console.log(letra);

    if (NewPalavra.includes(letra) === true) {
      setCor("green");
      console.log("Entrou em true");
    } else {
      setCor("red");
      console.log("Entrou em false");
    }

    console.log(NewPalavra.includes(letra));
  }
  return (
    <button
      onClick={() => verificar(`${props.letra}`)}
      style={{ backgroundColor: `${cor}` }}
    >
      {" "}
      {props.letra}
    </button>
  );
}
  // ----------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------------------------


  /* Sorteia a posição da palavra, pega o index dela, renderezia ela e oculta,
   cria os underline pelo numero de letras*/

  function criarPalavra() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    setPalavra(palavras[`${indexPalavra}`]);
    //setPalavra(palavras[0])
    const underline = "_ ";
    setLinhas(underline.repeat(palavras[indexPalavra].length));
  }
// ---------------------------------------------------------------------------
  const TodasLetras = [
    { letra: "A", color: "grey" },
    { letra: "B", color: "grey" },
    { letra: "C", color: "grey" },
    { letra: "D", color: "grey" },
    { letra: "E", color: "grey"},
    { letra: "F", color: "grey" },
    { letra: "G", color: "grey" },
    { letra: "H", color: "grey" },
    { letra: "I", color: "grey" },
    { letra: "J", color: "grey" },
    { letra: "K", color: "grey" },
    { letra: "L", color: "grey" },
    { letra: "M", color: "grey" },
    { letra: "N", color: "grey" },
    { letra: "O", color:"grey" },
    { letra: "P", color: "grey" },
    { letra: "Q", color: "grey" },
    { letra: "R", color: "grey" },
    { letra: "S", color: "grey"},
    { letra: "T", color: "grey" },
    { letra: "U", color: "grey" },
    { letra: "V", color: "grey" },
    { letra: "W", color: "grey" },
    { letra: "X", color: "grey" },
    { letra: "Y", color: "grey" },
    { letra: "Z", color: "grey" },
  ];

  return (
    <>
      <Main>
        <Center>
          <div>
            <img src={forca} alt="Forca" />
            <Palavra>
              
              <div> {SecretPalavra} </div>
              <div> {linhas}</div>
            </Palavra>
          </div>

          <button onClick={criarPalavra}> Escolher Palavra </button>
        </Center>
        <Options>
          {TodasLetras.map((TL, index) => (
            <Letras key={index} letra={TL.letra} color={TL.color} />
          ))}
        </Options>

        <Footer>
          <strong> Já sei a palavra</strong> <input></input>{" "}
          <button>Chutar</button>
        </Footer>
      </Main>
    </>
  );
}

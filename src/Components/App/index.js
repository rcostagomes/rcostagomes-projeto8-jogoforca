import React from "react";
import forca0 from "../../Assets/img/forca0.png";
import forca1 from "../../Assets/img/forca1.png";
import forca2 from "../../Assets/img/forca2.png";
import forca3 from "../../Assets/img/forca3.png";
import forca4 from "../../Assets/img/forca4.png";
import forca5 from "../../Assets/img/forca5.png";
import forca6 from "../../Assets/img/forca6.png";


import removeAccents from "remove-accents"
import { Main, Center, Options, Footer, Palavra } from "./style";
import { palavras } from "../palavras";

export default function App() {
  
  const [contador, setContador] = React.useState(0)
  const Vida = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
  const [imagem, setImagem ] = React.useState(Vida[contador]);
  const [linhas, setLinhas] = React.useState("");
  const [SecretPalavra, setPalavra] = React.useState("");
  const NewPalavra = removeAccents(SecretPalavra).toUpperCase();
  
  console.log(NewPalavra);
  const Palavrarender = NewPalavra.split("");

   // Botoes das letras--------------------------------// 
function Letras(props) {
  return (
    <button
      onClick={() => verificar(`${props.letra}`,`${props.cor}`)}
      style={{ backgroundColor: `${props.color}` }}
    >

      {props.letra}
    </button>
  );
}
  

  // ------------------------------------------------ //

  
  /* Sorteia a posição da palavra, pega o index dela, renderezia ela e oculta,
   cria os underline pelo numero de letras*/

   function criarPalavra() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    setPalavra(palavras[`${indexPalavra}`]);
    //setPalavra(palavras[0])
    const underline = "_ "
    setLinhas(underline.repeat(palavras[indexPalavra].length));
  }
  let AllUnderline = `${[linhas]}`
  console.log(AllUnderline);
// ----------------------------------------------------------------------------//


  
  function verificar(letra) {
   
    if (Palavrarender.includes(letra) === true) {
    
      
      console.log("Entrou em true");
      
    } else {
      console.log("entrou no falso")
    
    setContador(contador + 1)
    setImagem(Vida[contador+1])

    console.log(NewPalavra.includes(letra));
    console.log(Palavrarender)
  }
}
  
// ----------------------------------------------------------------------------


  
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
            <img src={imagem} alt="Forca" />
            <Palavra>
              
              <div>  </div>
              <span> {AllUnderline}</span>
            </Palavra>
          </div>

          <button onClick={criarPalavra}> Escolher Palavra </button>
        </Center>
        <Options>
          {TodasLetras.map((TL, index) => (
            <Letras key={index} letra={TL.letra}  />
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

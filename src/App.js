import React, { useState } from "react";
import alface from "./Assets/alface.png";
import beterraba from "./Assets/beterraba.png";
import cenoura from "./Assets/cenoura.png";
import cereja from "./Assets/cereja.png";
import laranja from "./Assets/laranja.png";
import limao from "./Assets/limao.png";
import manga from "./Assets/manga.png";
import tomate from "./Assets/tomate.png";

function App() {
  const [word, setWord] = useState("bem vindo");
  const Mudar = () => {
    setWord("oi");
  };
  const Voltar = () => {
    setWord("bem vindo");
  };

  const [numero, setNumero] = useState(0);

  const Sub = () => {
    setNumero(numero - 1);
  };

  const [frutas, setFrutas] = useState([
    alface,
    beterraba,
    cenoura,
    cereja,
    laranja,
    limao,
    manga,
    tomate
  ]);

  return (
    <>
      <h1>{word}</h1>
      <button
        onClick={() => {
          Mudar();
        }}
      >
        mudar
      </button>
      <button
        onClick={() => {
          Voltar();
        }}
      >
        §
      </button>
      <h1>{numero}</h1>
      <button
        onClick={() => {
          setNumero(numero < 10 ? numero + 1 : numero);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          Sub();
        }}
      >
        -
      </button>
      {frutas.map((item) => (
        <img src={item} alt="" />
      ))}
    </>
  );
}
export default App;

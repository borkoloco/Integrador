import React, { useState } from "react";
import styled from "styled-components";
import clickSound from "../click.wav";

const Input = styled.input`
  margin-top: 20px;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: 3px solid black;
`;

const Button = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 10px;

  &:hover {
    background-color: lightblue;
  }
`;

//en lugar de props se puede desestructurar y pasar {onSearch}...no haria falta props
export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setCharacter(value);
    //aca no suma sino que pisa....no es lo mismo que hacia con el spread
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div>
      <Input type="search" onChange={handleInputChange} />
      <Button
        onClick={() => {
          props.onSearch(character);
          playClickSound();
        }}
      >
        Agregar
      </Button>
      <Button
        onClick={() => {
          props.onSearch(Math.ceil(Math.random() * 826));
          playClickSound();
        }}
      >
        Random
      </Button>
    </div>
  );
}

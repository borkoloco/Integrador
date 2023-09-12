import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Details,
  H1,
  P,
  ImgDiv,
  Img,
  Info,
  H2,
  Li,
} from "./DetailStyles";
import slideSound from "../slide.mp3";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //aca ni modificamos con async await porque es mas efectivo promesa

  const playSlideSound = () => {
    const audio = new Audio(slideSound);
    audio.play();
  };

  return (
    character.name && (
      <Container>
        <Details>
          <H1>{character.name}</H1>
          <P>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi
            earum beatae numquam veniam cum! Dicta minus nostrum dolorem, est
            laudantium vel deserunt reprehenderit, quia ducimus, rem praesentium
            dolores impedit?"
          </P>
        </Details>

        <ImgDiv onMouseEnter={playSlideSound}>
          <Img src={character.image} alt="not found" />

          <Info>
            <H2>Description</H2>
            <ul>
              <Li>
                <strong>Status: </strong>
                {character.status}
              </Li>
              <Li>
                <strong>Especie: </strong>
                {character.species}
              </Li>
              <Li>
                <strong>Genero: </strong>
                {character.gender}
              </Li>
              <Li>
                <strong>Locacion: </strong>
                {character.location?.name}
              </Li>
              <Li>
                <strong>Episodios: </strong>
                {character.episode?.length}
              </Li>
              <Li>
                <strong>Creado: </strong>
                {character.created}
              </Li>
              <Li>
                <strong>Origen: </strong>
                {character.origin?.name}
              </Li>
            </ul>
          </Info>
        </ImgDiv>
      </Container>
    )
  );
}

//signo de pregunta????
//este es el renderizado condicional

export default Detail;

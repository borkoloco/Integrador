import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const CardsDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 10px;
  margin-left: 160px;
  padding-left: 20px;
  padding-bottom: 20px;
  border: 2px;
`;

export default function Cards(props) {
  const { characters } = props;
  return (
    <CardsDiv>
      {characters.map(
        ({ id, name, species, gender, image, episode, created, location }) => (
          //map retorna element y un index que tambien puedo usar como prop
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            episodes={episode?.length}
            location={location?.name}
            created={created}
            onClose={() => props.onClose(id)}
          />
        )
      )}
    </CardsDiv>
  );
}

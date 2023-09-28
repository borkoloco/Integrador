import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards, orderCards, resetCards } from "../redux/actions";
import Card from "../components/Card";
import {
  SelectDiv,
  Select,
  CardsDiv,
  Div,
  Div1,
  Div2,
  Button,
  Video,
} from "../css/FavoritesStyles";
import clickSound from "../assets/click.wav";

const Favorites = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const myFavs = useSelector((state) => state.myFavorites);
  // const { myFavorites } = useSelector((state) => state);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleReset = (event) => {
    playClickSound();
    dispatch(resetCards(event.target.value));
  };

  return (
    <>
      <Video loop autoPlay muted>
        <source src={require("../assets/video.mp4")} type="video/mp4" />
      </Video>
      <Div>
        <Div1>
          <SelectDiv>
            <label>
              <Select defaultValue={"Default"} onChange={handleOrder}>
                <option value="Default">Elegir Orden</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </Select>
            </label>
          </SelectDiv>
        </Div1>
        <Div2>
          <SelectDiv>
            <label>
              <Select defaultValue={"Default"} onChange={handleFilter}>
                <option value="Default">Elegir Genero</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </Select>
            </label>
          </SelectDiv>
        </Div2>
        <Button onClick={handleReset}>Reset</Button>
      </Div>

      <CardsDiv>
        {myFavs?.map(({ id, name, species, gender, image, onClose }) => (
          //map retorna element y un index que tambien puedo usar como prop
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => {
              alert("Por favor, eliminar del home. Gracias.");
              // onClose(id);
              // removeFav(id);
            }}
          />
        ))}
      </CardsDiv>
    </>
  );
};

//se puede hacer un map para los generos para no hardcodear todo
//value estaba selected y agregue defaultValue
//tambien se podian renderizar las etiquetas de genero con un map

export default Favorites;

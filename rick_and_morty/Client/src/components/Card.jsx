import React, { useEffect, useState } from "react";
import {
  CardBtn,
  LikeBtn,
  Sth2b,
  DetDiv,
  CardImg,
  CardDiv,
  ImgDiv,
  CenDiv,
  Sth1,
  Sth2,
} from "./CardStyles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import clickSound5 from "../click5.wav";
import clickSound6 from "../click6.wav";
import clickSound3 from "../click3.wav";
import slideSound from "../slide.mp3";

export default function Card({ id, name, species, image, gender, onClose }) {
  const dispatch = useDispatch();
  const allFavs = useSelector((state) => state.allCharacters);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    allFavs?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allFavs, id]);

  //chequear bien que este array de dependencias no deba estar vacio, no debe ser un elemento que este cambiando constantemente sino va a loopear....el array debe estar vacio porque deberia ser un CDM....o CDU

  const handleFavorite = () => {
    if (isFav === true) {
      playClickSound6();
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      playClickSound5();
      dispatch(addFav({ id, name, species, image, gender, onClose }));
      setIsFav(true);
    }
  };

  const playClickSound5 = () => {
    const audio = new Audio(clickSound5);
    audio.play();
  };

  const playClickSound6 = () => {
    const audio = new Audio(clickSound6);
    audio.play();
  };

  const playClickSound3 = () => {
    const audio = new Audio(clickSound3);
    audio.play();
  };

  const playSlideSound = () => {
    const audio = new Audio(slideSound);
    audio.play();
  };

  return (
    <CardDiv>
      <ImgDiv onMouseEnter={playSlideSound}>
        <CardImg src={image} alt={name} />
      </ImgDiv>

      <DetDiv>
        <CenDiv>
          <Link onClick={playClickSound3} to={`/detail/${id}`}>
            <Sth1>{name}</Sth1>
          </Link>
          <Sth2>Especie:{species}</Sth2>
          <Sth2b>Genero:{gender}</Sth2b>
        </CenDiv>
        {isFav ? (
          <LikeBtn onClick={handleFavorite}>❤️</LikeBtn>
        ) : (
          <LikeBtn onClick={handleFavorite}>🤍</LikeBtn>
        )}
        <CardBtn onClick={() => onClose(id)}>X</CardBtn>
      </DetDiv>
    </CardDiv>
  );
}

//tambien podria renderizar la carta y pasarle props

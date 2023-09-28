import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import clickSound from "../assets/click3.wav";

const DivNav = styled.div`
  justify-content: space-around;
  display: flex;
  height: 70px;
  background-color: grey;
  border: 2px solid lightgreen;
  border-radius: 2px;
`;

const NavLinks = styled(NavLink)`
  margin-top: 20px;
`;

const Button = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 10px;
  margin-top: 22px;

  &:hover {
    background-color: lightblue;
  }
`;

function Nav(props) {
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  return (
    <DivNav>
      <NavLinks onClick={playClickSound} to="/home">
        Home
      </NavLinks>
      <NavLinks onClick={playClickSound} to="/favorites">
        Favorites
      </NavLinks>
      <NavLinks onClick={playClickSound} to="/About">
        About
      </NavLinks>
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      <Button onClick={props.logout}>LOGOUT</Button>
    </DivNav>
  );
}

export default Nav;

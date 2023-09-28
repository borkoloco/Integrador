import styled from "styled-components";

export const AboutDiv = styled.div`
  padding: 2px;
  text-align: center;
  justify-items: center;
  background-color: #474e5d;
  color: white;
`;

export const Container = styled.div`
  padding: 0 16px;
  &:after {
    content: "";
    clear: both;
    display: table;
    box-sizing: border-box;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  background-color: grey;
  border: 2px solid lightgreen;
  border-radius: 3px;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const Pe = styled.p`
  color: white;
`;

export const Button = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 30%;
  &:hover {
    background-color: #555;
  }
`;

export const Column = styled.div`
  float: left;
  width: 23.3%;
  margin-bottom: 16px;
  padding: 0 8px;
  @media screen and (max-width: 550px) {
    width: 100%;
    display: block;
  }
`;

export const Row = styled.div`
  &:after {
    content: "";
    clear: both;
    display: table;
    box-sizing: border-box;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

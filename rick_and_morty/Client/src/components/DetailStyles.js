import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 450px;
  width: 800px;
  border: 4px solid lightgreen;
`;

export const Details = styled.div`
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
`;

export const chan = keyframes`
      from {
        content: "Details";
      }
      to {
        content: "Card";
      }
  `;

export const H1 = styled.h1`
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 40px;
  color: #344055;
  margin: 0;
  &:before {
    position: absolute;
    content: "";
    right: 0%;
    top: 0%;
    transform: translate(25px, -15px);
    font-family: "Farsan", cursive;
    display: inline-block;
    background: #ffa69e;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    color: #fff;
    margin: 0;
    animation: ${chan} 6s ease infinite;
  }
`;

export const P = styled.p`
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: #7d7d7d;
`;

export const Info = styled.div`
  background: rgba(27, 26, 26, 0.9);
  font-family: "Farsan", cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgDiv = styled.div`
  transition: all 0.3s ease-out;
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 50%;
  &:hover ${Info} {
    transform: translateX(0);
  }
  &:hover ${Img} {
    transition: all 0.3s ease-out;
  }
  &:hover ${Img} {
    transform: scale(1.2, 1.2);
  }
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const Li = styled.li`
  transition: 0.3s ease;
  &:hover {
    transform: translateX(50px) scale(1.3);
  }
`;

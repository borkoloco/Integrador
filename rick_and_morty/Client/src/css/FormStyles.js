import styled, { keyframes } from "styled-components";

export const Logdiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const StyledH2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const Userbox = styled.div`
  position: relative;
`;

export const StInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: white;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  &:textarea {
    color: grey;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;

  ${StInput}:focus ~ & {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

export const Stbtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  background-color: grey;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;

export const btnanim1 = keyframes`
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  `;
export const btnanim2 = keyframes`
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
  `;
export const btnanim3 = keyframes`
 0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
  `;
export const btnanim4 = keyframes`
 0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
  `;

export const Span = styled.span`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${btnanim1} 1s linear infinite;
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${btnanim2} 1s linear infinite;
    animation-delay: 0.25s;
  }
  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${btnanim3} 1s linear infinite;
    animation-delay: 0.5s;
  }
  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${btnanim4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const Pe = styled.p`
  font-size: 15px;
  color: red;
  margin-left: 5em;
  margin-top: 0;
`;

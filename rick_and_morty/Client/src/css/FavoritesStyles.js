import styled from "styled-components";

export const SelectDiv = styled.div`
  justify-content: center;
  align-items: flex-start;
  position: relative;
  float: left;
  min-width: 200px;
  margin: 15px;
  &:after {
    content: "<>";
    font-family: 17px "Consolas", monospace;
    color: #333;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;
    top: 18px;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
    position: absolute;
    pointer-events: none;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  max-width: 320px;
  height: 50px;
  float: right;
  margin: 5px 0px;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  -ms-word-break: normal;
  word-break: normal;
  &:-ms-expand {
    display: none;
  }
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const CardsDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 180px;
  padding-left: 20px;
  padding-bottom: 20px;
  border: 2px;
`;

export const Div = styled.div`
  display: flex;
  height: 150px;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
`;
export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 0;
  padding: 0;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  height: 40px;
  width: 90px;
  font-size: 17px;
  border-radius: 10px;
  margin-top: 25px;

  &:hover {
    background-color: lightblue;
  }
`;

import styled from "styled-components";

export const DetDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%; /*100%*/
  height: 100%;
  background: lightgreen;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

export const CardDiv = styled.div`
  padding: 5px;
  border-radius: 15px;
  border: 2px solid green;
  margin-top: 100px;
  margin-bottom: -60px;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 300px;
  background: green;
  &:hover ${DetDiv} {
    transform: perspective(2000px) rotateY(0deg);
  }
  &:hover ${CardImg} {
    opacity: 0.5;
    transform: translateX(30%); /*100%*/
  }
`;

export const CardBtn = styled.button`
  background-color: red;
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CenDiv = styled.div`
  padding: 20px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const Sth1 = styled.h1`
  margin: 0;
  padding: 0;
  color: #ff3636;
  line-height: 20px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Sth2 = styled.h2`
  font-size: 14px;
  color: #262626;
`;

export const Sth2b = styled.h2`
  margin: 10px 0;
  padding: 0;
  color: #262626;
`;

export const LikeBtn = styled.button`
  position: right;
  background-color: red;
`;

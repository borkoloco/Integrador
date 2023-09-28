import React, { useState } from "react";
import { validation } from "../validation";
import {
  Logdiv,
  StyledH2,
  Userbox,
  StInput,
  Label,
  Stbtn,
  Span,
  Pe,
} from "../css/FormStyles";
import clickSound from "../assets/click2.wav";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "mondiola@gmail.com",
    password: "mondiola123",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <Logdiv>
      <StyledH2>Login</StyledH2>
      <form onSubmit={handleSubmit}>
        <Userbox>
          <StInput
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          ></StInput>
          <Label>Email</Label>
          {errors.email ? <Pe>{errors.email}</Pe> : null}
        </Userbox>
        <Userbox>
          <StInput
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          ></StInput>
          <Label>Password</Label>
          {errors.password ? <Pe>{errors.password}</Pe> : null}
        </Userbox>
        <Stbtn type="submit" onClick={playClickSound}>
          <Span />
          <Span />
          <Span />
          <Span />
          Submit
        </Stbtn>
      </form>
    </Logdiv>
  );
}

export default Form;

//no tira bien los errores en el login

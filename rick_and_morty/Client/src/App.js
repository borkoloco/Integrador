import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import axios from "axios";
import Error from "./components/Error";
import Favorites from "./components/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import clickSound from "./click2.wav";
import clickSound4 from "./click4.wav";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "mondiola@gmail.com";
  // const PASSWORD = "mondiola123";
  const dispatch = useDispatch();
  const location = useLocation();

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("Ya existe personaje con ese ID");
      }
    } catch (error) {
      window.alert("Personaje no encontrado");
    }
  };

  // CON EXPRESS
  // const onSearch = (id) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`)
  //     .then(({ data }) => {
  //       if (!characters.find((char) => char.id === data.id)) {
  //         if (data.name) {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         }
  //       } else {
  //         window.alert("Ya existe personaje con ese ID");
  //       }
  //     })
  //     .catch(() => window.alert("Personaje no encontrado"));
  // };

  // buscar dotenv para guardar constantes

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      window.alert("Datos Incorrectos");
    }
  };

  //res.status(500).json({error:error.message})???

  //ESTO NO FUNCIONA

  // CON EXPRESS
  // const login = (userData) => {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   });
  // };

  // setAccess(access)????

  // ANTES DE EXPRESS
  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    // console.log(filtered);
    playClickSound4();
    dispatch(removeFav(id));
    setCharacters(filtered);
  };

  const logout = () => {
    playClickSound();
    setAccess(false);
    // window.location.reload();
    window.alert("Hasta pronto!");
  };

  useEffect(() => {
    // console.log(characters);
    !access && navigate("/");
  }, [access, navigate]);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  const playClickSound4 = () => {
    const audio = new Audio(clickSound4);
    audio.play();
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

/*<Route path="*" element={} /> aca usar el 404 NO FUNCIONA */
//   axios(`https://rickandmortyapi.com/api/character/${id}`)

export default App;

// como hago para que llegue mismo error del servidor

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}${id}`)
    .then(({ data }) => {
      const { id, name, status, species, origin, image, gender } = data;
      const character = { id, name, status, species, origin, image, gender };

      if (character.name) {
        res.status(200).json(character);
      } else {
        res.status(404).json({ message: error });
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = getCharById;
// SIN EXPRESS
// const axios = require("axios");

// function getCharById(res, id) {
//   return axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const char = {
//         id: id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(char));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;

// tambien podria hacer destrudcturing para no tenes que pasar data...
// no habia hecho los res aca...que relacioin tiene con el parametro?
// para que el parametro?

// const axios = require("axios");

// Llamar a la función y manejar la promesa resultante
// hacerSolicitudYCrearObjeto(123)
//   .then((objeto) => {
//     console.log("Objeto creado:", objeto);
//     // Puedes hacer más cosas con el objeto aquí
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// axios(`http://localhost:3001/rickandmorty/character/${id}`)
// .then(({ data }) => {
//   if (!characters.find((char) => char.id === data.id)) {
//     if (data.name) {
//       setCharacters((oldChars) => [...oldChars, data]);
//     }
//   } else {
//     window.alert("Ya existe personaje con ese ID");
//   }
// })
// .catch(() => window.alert("Personaje no encontrado"));
// };

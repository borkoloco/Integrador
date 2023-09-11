const PORT = 3001;
const server = require("./app");

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

//PRE TESTING
// const express = require("express");
// const server = express();
// const PORT = 3001;
// const router = require("./routes/index");

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use(express.json());
// server.use("/rickandmorty", router);

// server.listen(PORT, () => {
//   console.log("Server raised in port: " + PORT);
// });

// SIN EXPRESS
// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     const { url } = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("/rickandmorty/character")) {
//       let id = url.split("/").pop();
//       getCharById(res, id);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Ruta no válida.");
//     }
//   })
//   .listen(PORT, "localhost");

//   /rickandmorty/character/:id ????????
//  porque no funciono con slice index of?????
//  como hago para que el client reciba mismo mensaje

// const http = require("http");
// const characters = require("./utils/data");

// http
//   .createServer((req, res) => {
//     const { url } = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("/rickandmorty/character")) {
//       let id = url.split("/").pop();
//       let character = characters.find((char) => char.id == Number(id));
//       if (character) {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Personaje no encontrado.");
//       }
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Ruta no válida.");
//     }
//   })
//   .listen(3001, "localhost");

//  url.slice(-1) tambien me tir el ultimo id

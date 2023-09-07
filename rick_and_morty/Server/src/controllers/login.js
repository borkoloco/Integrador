const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  let access = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });
  return res.json({ access });
};

module.exports = login;

// ANTES DE CAMBIAR
// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       return res.status(200).json({ access: true });
//     }
//   });
//   return res.status(400).json({ access: false });
// };

// module.exports = login;

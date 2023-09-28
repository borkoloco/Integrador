const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) return res.status(400).send("Faltan datos");
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send("Usuario no encontrado");
    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;

//login era asi
// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;

//   let access = false;
//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }
//   });
//   return res.json({ access });
// };

// module.exports = login;

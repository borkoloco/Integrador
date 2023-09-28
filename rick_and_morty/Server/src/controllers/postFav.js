const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, image, species, gender } = req.body;
  try {
    if (!id || !name || !image || !species || !gender)
      res.status(401).send("Faltan datos");
    const favorite = await Favorite.findOrCreate({
      where: { id, name, image, species, gender },
    });
    console.log(id);
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
//tengo que pasarle id?? si...ese era el prob

// await Favorite.findOrCreate({
//   where: { id },
//   defaults: { name, origin, status, image, species, gender },
// });
// const favorites = await Favorite.findAll();
// res.status(200).json(favorites)

// await Favorite.findOrCreate({
//     where: {
//       id,
//       name,
//       origin,
//       status,
//       image,
//       species,
//       gender,
//     },
//   });
//   const favorites = await Favorite.findAll();
//   return res.status(200).json(favorites);

// este controller no existia. tenia handle favs que contenia delete y post....era asi
// let favorites = [];

// const postFav = (req, res) => {
//   favorites.push(req.body);
//   return res.status(200).json(favorites);
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;
//   const filtered = favorites.filter((fav) => +fav.id !== +id);
//   favorites = filtered;
//   return res.status(200).json(favorites);
// };

// module.exports = { postFav, deleteFav };

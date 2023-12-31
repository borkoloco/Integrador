const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Favorite.destroy({ where: { id } });
    // const favorite = await Favorite.findByPk(id);
    // await favorite.destroy();
    // if (!favorite) return res.status(404).send("Personaje no encontrado");
    console.log(id);
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;

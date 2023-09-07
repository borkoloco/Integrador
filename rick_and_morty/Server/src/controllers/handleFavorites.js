let favorites = [];

const postFav = (req, res) => {
  favorites.push(req.body);
  return res.status(200).json(favorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const filtered = favorites.filter((fav) => +fav.id !== +id);
  favorites = filtered;
  return res.status(200).json(favorites);
};

module.exports = { postFav, deleteFav };

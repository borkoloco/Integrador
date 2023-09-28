const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.post("/login", postUser);
router.delete("/fav/:id", deleteFav);

module.exports = router;

// PRE DATABASE
// const express = require("express");
// const router = express.Router();
// const login = require("../controllers/login");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const getCharById = require("../controllers/getCharById");

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

// module.exports = router;

// este archivo era asi ante de DB
// const express = require("express");
// const router = express.Router();
// const login = require("../controllers/login");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const getCharById = require("../controllers/getCharById");

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

// module.exports = router;

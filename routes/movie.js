const router = require("express").Router();
const axios = require("axios");

const uri = process.env.OMDB_URI;

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/:s", (req, res) => {
  axios
    .get(uri + "s=" + req.params.s)
    .then((movies) => res.json(movies.data))
    .catch((error) => res.status(400).json(error));
});

router.get("/single/:id", (req, res) => {
  axios
    .get(uri + "i=" + req.params.id)
    .then((movies) => res.json(movies.data))
    .catch((error) => res.status(400).json(error));
});

module.exports = router;

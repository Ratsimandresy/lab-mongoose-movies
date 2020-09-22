const express = require("express");
const router = new express.Router();

const MovieModel = require("../models/movie-model");

router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies", { movies: movies });
  } catch (err) {
    next(err);
  }
});

router.get("/:id/details", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movie-details", { movie: movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

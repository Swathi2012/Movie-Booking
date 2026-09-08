import { Router } from "express";
import { movies} from "../data/movies";
 
const router = Router();
 
// GET all movies
router.get("/", (req, res) => {
  res.json(movies);
});
 
// GET single movie by id
router.get("/:id", (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);
 
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
 
  res.json(movie);
});
 
export default router;
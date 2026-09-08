import { FaGrinStars } from "react-icons/fa";
import type { Movie } from "../data/movies";
import "./MovieCard.css";
type MovieCardProps = {
  movie: Movie;
  onBookNow: () => void;
};

const MovieCard = ({ movie, onBookNow }: MovieCardProps) => {
  //throw new Error("MovieCard Crashed!");
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>
        {movie.language} | {movie.runtime}
      </p>

      <p>
        <FaGrinStars /> {movie.rating}
      </p>
      
      <button onClick={onBookNow}>Book Now</button>
    </div>
  );
};

export default MovieCard;

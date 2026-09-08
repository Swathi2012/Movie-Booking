import type { Movie } from "../data/movies";
type MovieDetailsProps = {
  movie: Movie;
  onSelectTime: (time: string) => void;
};

function MovieDetails({ movie, onSelectTime }: MovieDetailsProps) {


  return (
    <div className="movie-details">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        {movie.language} | {movie.runtime}
      </p>
      <p>⭐ {movie.rating}</p>
      <h3>Select Show Time</h3>
      <div className="showtimes">
        {movie.showtimes.map((time) => (
          <button key={time} onClick={() => onSelectTime(time)}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;

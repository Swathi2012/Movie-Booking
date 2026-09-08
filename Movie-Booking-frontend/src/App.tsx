 import "./App.css";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
 
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import SeatBooking from "./components/SeatBooking";
import Cart from "./components/Cart";
import HomeContent from "./components/HomeContent";
import ErrorBoundary from "./components/ErrorBoundary";
 
import { useEffect } from "react";
 
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { setSelectedMovie, fetchMovies } from "./features/movie/movieSlice";
 
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { list: movies, loading, error } = useAppSelector((state) => state.movie);
 
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
 
  if (loading === "pending") {
    return <p>Loading movies...</p>;
  }
 
  if (loading === "failed") {
    return <p>Failed to load movies: {error}</p>;
  }
 
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onBookNow={() => navigate(`/seats/${movie.id}`)}
        />
      ))}
    </div>
  );
};
 
const SeatBookingPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
 
  const movies = useAppSelector((state) => state.movie.list);
  const movie = movies.find((currentMovie) => currentMovie.id === id);
 
  useEffect(() => {
    if (movie) {
      dispatch(setSelectedMovie(movie));
    }
  }, [movie, dispatch]);
 
  if (!movie) {
    return <p>Movie not found</p>;
  }
 
  return <SeatBooking movie={movie} />;
};
 
const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
 
  return (
    <div>
      <Header
        onCartClick={() => navigate("/cart")}
        onHomeClick={() => navigate("/")}
        onMoviesClick={() => navigate("/movies")}
      />
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/seats/:id" element={<SeatBookingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
};
 
export default App;
 

import { useEffect } from "react";
 
import type { Movie } from "../data/movies";
import { useNavigate } from "react-router-dom"; 
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchSeatsForMovie, toggleSeat } from "../features/seat/seatSlice";
import { addToCart } from "../features/cart/cartSlice";
 
import "./SeatBooking.css";
 
type SeatBookingProps = {
  movie: Movie;
};
 
const TICKET_PRICE = 200;
 
const SeatBooking = ({ movie }: SeatBookingProps) => {
  const dispatch = useAppDispatch();
 const navigate=useNavigate();
 const cartItems=useAppSelector((state)=>state.cart.items)
 const isInCart =cartItems.some((item)=>item.movieId===movie.id)
  useEffect(() => {
    dispatch(fetchSeatsForMovie(movie.id));
  }, [dispatch, movie.id]);
 
  const { seatsByMovieId, loading } = useAppSelector((state) => state.seat);
  const seats = seatsByMovieId[movie.id] ?? [];
 
  const selectedSeats = seats.filter((seat) => seat.status === "selected");
  const selectedSeatIds = selectedSeats.map((seat) => seat.id);
 
  const totalAmount = selectedSeatIds.length * TICKET_PRICE;
 
  const handleAddToCart = () => {
    if (selectedSeatIds.length === 0) {
      return;
    }
 
    dispatch(
      addToCart({
        movieId: movie.id,
        movieTitle: movie.title,
        selectedSeatIds,
        totalAmount,
      }),
    );
    navigate("/cart")
  };
 
  if (loading === "pending" && seats.length === 0) {
    return <p>Loading seats...</p>;
  }
 
  return (
    <div className="seat-booking">
      <h2>{movie.title}</h2>
 
      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat.id}
            type="button"
            className={`seat ${seat.status}`}
            onClick={() =>
              dispatch(
                toggleSeat({
                  movieId: movie.id,
                  seatId: seat.id,
                }),
              )
            }
            disabled={seat.status === "booked"}
          >
            {seat.id}
          </button>
        ))}
      </div>
 
      <div className="booking-actions">
        <p>
          Selected Seats:{" "}
          <strong>
            {selectedSeatIds.length > 0 ? selectedSeatIds.join(", ") : "None"}
          </strong>
        </p>
 
        <p>
          Number of Tickets: <strong>{selectedSeatIds.length}</strong>
        </p>
 
        <p>
          Total: <strong>₹{totalAmount}</strong>
        </p>
 
        <button
          type="button"
          className="add-cart-button"
          onClick={isInCart?()=>navigate("/cart"):handleAddToCart}
          disabled={!isInCart && selectedSeatIds.length===0}
        >
          {isInCart? "Go To Cart": "Add To Cart"}
        </button>
      </div>
    </div>
  );
};
 
export default SeatBooking;
 

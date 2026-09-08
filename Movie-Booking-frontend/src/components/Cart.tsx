import "./Cart.css";
import { CiShoppingCart } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.totalAmount,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-box">
          <CiShoppingCart className="empty-cart-icon" />

          <h2 className="empty-cart-title">Your Cart is Empty</h2>

          <p className="empty-cart-text">
            Select a movie and book seats to view your booking summary.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <h2 className="cart-title">Booking Summary</h2>

        {cartItems.map((item) => (
          <div className="booking-cart-item" key={item.movieId}>
            <h3 className="movie-title">
              🎬 {item.movieTitle}
            </h3>

            <p className="cart-label">Selected Seats</p>

            <p className="cart-value">{item.selectedSeatIds.join(", ")}</p>

            <p className="cart-label">Number of Tickets</p>

            <p className="cart-value">{item.selectedSeatIds.length}</p>

            <p className="cart-label">Amount</p>

            <p className="cart-value">₹{item.totalAmount}</p>

            <button
              className="remove-cart-button"
              onClick={() => dispatch(removeFromCart(item.movieId))}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="total-section">
          <p className="cart-label">Grand Total</p>

          <p className="total-price">₹{grandTotal}</p>
        </div>

        <button
          className="clear-cart-button"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;

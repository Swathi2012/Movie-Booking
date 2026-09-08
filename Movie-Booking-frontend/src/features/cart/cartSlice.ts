import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  movieId: string;
  movieTitle: string;
  selectedSeatIds: string[];
  totalAmount: number;
};

type CartState = {
  items: CartItem[];
};

// const initialState: CartState = {
//   items: [],
// };
const savedCart = localStorage.getItem("cartItems");

const initialState: CartState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingMovie = state.items.find(
        (item) => item.movieId === action.payload.movieId,
      );

      if (existingMovie) {
        existingMovie.selectedSeatIds = action.payload.selectedSeatIds;

        existingMovie.totalAmount = action.payload.totalAmount;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.movieId !== action.payload,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

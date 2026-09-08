import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../features/movie/movieSlice";
import seatReducer from "../features/seat/seatSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    seat: seatReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

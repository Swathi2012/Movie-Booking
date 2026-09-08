import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { Seat } from "../../data/movies";
import { defaultSeats } from "../../data/seats";
 
type SeatState = {
  seatsByMovieId: Record<string, Seat[]>;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};
 
type ToggleSeatPayload = {
  movieId: string;
  seatId: string;
};
 
const initialState: SeatState = {
  seatsByMovieId: {},
  loading: "idle",
  error: null,
};
 
const createMovieSeats = (): Seat[] => {
  return defaultSeats.map((seat) => ({
    ...seat,
  }));
};
 
// Async thunk — simulates fetching seat availability for a movie from a server
export const fetchSeatsForMovie = createAsyncThunk(
  "seat/fetchSeatsForMovie",
  async (movieId: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300)); // fake network delay
    return { movieId, seats: createMovieSeats() };
  }
);
 
const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    toggleSeat: (state, action: PayloadAction<ToggleSeatPayload>) => {
      const { movieId, seatId } = action.payload;
 
      const movieSeats = state.seatsByMovieId[movieId];
 
      if (!movieSeats) {
        return;
      }
 
      const selectedSeat = movieSeats.find((seat) => seat.id === seatId);
 
      if (!selectedSeat || selectedSeat.status === "booked") {
        return;
      }
 
      selectedSeat.status =
        selectedSeat.status === "available" ? "selected" : "available";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeatsForMovie.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchSeatsForMovie.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const { movieId, seats } = action.payload;
 
        // Only set seats if this movie doesn't already have them
        // (prevents wiping out a user's in-progress selection on refetch)
        if (!state.seatsByMovieId[movieId]) {
          state.seatsByMovieId[movieId] = seats;
        }
      })
      .addCase(fetchSeatsForMovie.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Failed to load seats";
      });
  },
});
 
export const { toggleSeat } = seatSlice.actions;
export default seatSlice.reducer
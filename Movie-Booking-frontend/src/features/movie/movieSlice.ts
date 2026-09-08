import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { Movie } from "../../data/movies";

type MovieState = {
  selectedMovie: Movie | null;
  list: Movie[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

const initialState: MovieState = {
  selectedMovie: null,
  list: [],
  loading: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await axios.get<Movie[]>("http://localhost:5001/api/movies");
  return response.data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.loading = "succeeded";
          state.list = action.payload;
        },
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;

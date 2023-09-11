import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    currentmovieallDetails: null,
    showMovieDetails: false,
    currentMovietitle: null,
    currentMovieId: null,
    currentMovieTrailer: null,
    currentMovieOverview: null,
    movieCast: null,
  },
  reducers: {
    showMovieDetails: (state) => {
      state.showMovieDetails = !state.showMovieDetails;
    },
    addMovieDetails: (state, action) => {
      state.currentMovieId = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.currentMovieTrailer = action.payload;
    },
    addCurrentMovie: (state, action) => {
      state.currentMovietitle = action.payload;
    },
    addCurrentMovieOverview: (state, action) => {
      state.currentMovieOverview = action.payload;
    },
    addCast: (state, action) => {
      state.movieCast = action.payload;
    },
    addCurrentMovieallDetails: (state, action) => {
      state.currentmovieallDetails = action.payload;
    },
  },
});

export const {
  showMovieDetails,
  addMovieDetails,
  addMovieTrailer,
  addCurrentMovie,
  addCurrentMovieOverview,
  addCurrentMovieallDetails,
  addCast,
} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    upcomingMovies: null,
    horrormovies: null,
    comedyMovies:null,
    romanceMovies:null,
    netflixoriginals:null,
    actionMovies:null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrormovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addRomanceMovies: (state, action) => {
      state.romanceMovies = action.payload;
    },
    addNetflixOriginals: (state, action) => {
      state.netflixoriginals = action.payload;
    },
    addActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    addtrailervideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addtrailervideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addHorrorMovies,
  addComedyMovies,
  addRomanceMovies,
  addNetflixOriginals,
  addActionMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;

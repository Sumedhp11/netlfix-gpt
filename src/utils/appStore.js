import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import movieDetailsReducer from "./movieDetailSlice";
import watchlistReducer from "./watchlistSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    movieDetails: movieDetailsReducer,
    config: configReducer,
    watchlist: watchlistReducer,
    
  },
});

export default appStore;

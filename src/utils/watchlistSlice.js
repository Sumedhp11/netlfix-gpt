import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlistMovies: [],
    showWatchPage: false,
  },
  reducers: {
    addtowatchList(state, action) {
      state.watchlistMovies.push(action.payload);
    },
    toggleWatchPage(state) {
      state.showWatchPage = !state.showWatchPage;
    },
    closeModal(state) {
      state.showWatchPage = false;
    },
  },
});

export const { addtowatchList, toggleWatchPage, closeModal } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    showMovieDetails: false,
    currentMovieId: null,
    currentMovieTrailer:null
  },
  reducers: {
    showMovieDetails: (state, action) => {
      state.showMovieDetails = true;
    },
    addMovieDetails: (state, action) => {
      state.currentMovieId = action.payload;
    },
    addMovieTrailer :(state,action) =>{
        state.currentMovieTrailer = action.payload
    }
  },
});

export const { showMovieDetails, addMovieDetails,addMovieTrailer } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;

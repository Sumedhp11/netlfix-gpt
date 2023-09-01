import React from "react";
import { POSTER_URL_CDN } from "../utils/constants";
import {
  addCurrentMovie,
  addCurrentMovieOverview,
  addMovieDetails,
} from "../utils/movieDetailSlice";
import { useDispatch } from "react-redux";
import { showMovieDetails } from "../utils/movieDetailSlice";

const MovieCard = ({ posterPath, id, name,overview }) => {
  const dispatch = useDispatch();
  const ToggleMovieDetails = () => {
    dispatch(addMovieDetails(id));
    dispatch(showMovieDetails());
    dispatch(addCurrentMovie(name));
    dispatch(addCurrentMovieOverview(overview));
  };
  if (!posterPath) return null;
  // console.log(posterPath);
  return (
    <div className="w-36 lg:w-48 pr-5 " onClick={ToggleMovieDetails}>
      <img
        className="hover:scale-125 cursor-pointer transition-all duration-500"
        src={POSTER_URL_CDN + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;

import React from "react";
import { POSTER_URL_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  // console.log(posterPath);
  return (
    <div className="w-48 pr-4">
      <img src={POSTER_URL_CDN + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;

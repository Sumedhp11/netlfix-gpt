import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const Movies = movies;
  if (!Movies) return null;
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {Movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              id={movie.id}
              name={movie.title}
              overview={movie.overview}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

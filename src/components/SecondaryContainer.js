import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-0 md:-mt-40  pl-4 md:pl-12 relative z-10">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />

          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies?.horrormovies} />

          <MovieList title={"Comedy"} movies={movies?.comedyMovies} />
          <MovieList title={"Romance"} movies={movies?.romanceMovies} />
          <MovieList title={"Action"} movies={movies?.actionMovies} />
          <MovieList
            title={"Netlix Originals"}
            movies={movies?.netflixoriginals}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

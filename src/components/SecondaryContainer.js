import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className="mt-0 lg:-mt-52 pl-4 lg:pl-12 relative z-20">
          <MovieList
            title={"Netlix Originals"}
            movies={movies?.netflixoriginals}
          />
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
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import useActionMovies from "../hooks/useActionMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useNetlixOriginals from "../hooks/useNetlixOriginals";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useRomanceMovies from "../hooks/useRomancemovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingmovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import MovieDetails from "./MovieDetails";
import WatchList from "./WatchList";

const Browse = () => {
  // console.log(setgetToggleWatchListData);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieDetails = useSelector(
    (store) => store.movieDetails.showMovieDetails
  );

  const toggleWatchPage = useSelector((store) => store.watchlist.showWatchPage);
  // console.log(toggleWatchPage);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorrorMovies();
  useComedyMovies();
  useNetlixOriginals();
  useRomanceMovies();
  useActionMovies();

  return (
    <React.Fragment>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : showMovieDetails === true ? (
        <MovieDetails />
      ) : (
        <React.Fragment>
          <MainContainer />
          <SecondaryContainer />
        </React.Fragment>
      )}
      {toggleWatchPage && <WatchList />}
    </React.Fragment>
  );
};

export default Browse;

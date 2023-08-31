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

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieDetails = useSelector(
    (store) => store.movieDetails.showMovieDetails
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorrorMovies();
  useComedyMovies();
  useNetlixOriginals();
  useRomanceMovies();
  useActionMovies();
  if (!showMovieDetails && !showGptSearch) {
    return (
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    );
  } else if (showGptSearch === true) {
    return (
      <div>
        <Header />
        <GptSearch />;
      </div>
    );
  } else if (showMovieDetails) {
    return (
      <div>
        <Header />
        <MovieDetails />
      </div>
    );
  }
};

export default Browse;

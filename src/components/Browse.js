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

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

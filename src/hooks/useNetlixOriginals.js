import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { addNetflixOriginals } from "../utils/moviesSlice";
const useNetlixOriginals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getHorrorMovies();
  }, []);
  const getHorrorMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3//discover/tv?api_key=" +
        TMDB_API_KEY +
        "&with_network=123",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNetflixOriginals(json.results));
    // console.log(json);
  };
};
export default useNetlixOriginals;

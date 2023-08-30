import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { addRomanceMovies } from "../utils/moviesSlice";
const useRomanceMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getRomanticMovies();
  }, []);
  const getRomanticMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/discover/movie?api_key=" + TMDB_API_KEY + "&with_genres=10749",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRomanceMovies(json.results));
    console.log(json);
  };
};
export default useRomanceMovies;

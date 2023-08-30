import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { addComedyMovies } from "../utils/moviesSlice";
const useComedyMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getcomedymovies();
  }, []);
  const getcomedymovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/discover/movie?api_key=" +
        TMDB_API_KEY +
        "&with_genres=35",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addComedyMovies(json.results));
    // console.log(json);
  };
};
export default useComedyMovies;

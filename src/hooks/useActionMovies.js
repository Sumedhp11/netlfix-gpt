import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { addActionMovies } from "../utils/moviesSlice";
const useActionMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getActionMovies();
  }, []);
  const getActionMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/discover/movie?api_key=" +
        TMDB_API_KEY +
        "&with_genres=28",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addActionMovies(json.results));
    // console.log(json);
  };
};
export default useActionMovies;

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";
const useHorrorMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getHorrorMovies();
  }, []);
  const getHorrorMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/discover/movie?api_key="+TMDB_API_KEY+"&with_genres=27",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
    // console.log(json);
  };
};
export default useHorrorMovies;

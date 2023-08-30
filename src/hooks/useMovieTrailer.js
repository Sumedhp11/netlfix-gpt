import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtrailervideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    const filteredData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addtrailervideo(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailer;

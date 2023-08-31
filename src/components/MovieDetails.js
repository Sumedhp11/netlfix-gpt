import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LOGIN_BG } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieDetailSlice";
import CurrentmovieTrailer from "./CurrentmovieTrailer";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((store) => store.movieDetails.currentMovieId);

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
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <div className="bg-blue-950">
      <CurrentmovieTrailer />
    </div>
  );
};

export default MovieDetails;

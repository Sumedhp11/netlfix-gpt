import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieDetailSlice";
import CurrentmovieTrailer from "./CurrentmovieTrailer";
import useGetCredit from "../hooks/useGetCredit";
import CastNames from "./CastNames";
import { addtowatchList } from "../utils/watchlistSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/Firebase";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.watchlist.watchlistMovies);
  console.log(watchlist);

  const allmovieDetails = useSelector(
    (store) => store.movieDetails.currentmovieallDetails
  );
  // console.log(allmovieDetails);
  const movieId = useSelector((store) => store.movieDetails.currentMovieId);
  useGetCredit(movieId);
  const movieTitle = useSelector(
    (store) => store.movieDetails.currentMovietitle
  );
  const movieOverview = useSelector(
    (store) => store.movieDetails.currentMovieOverview
  );
  const Cast = useSelector((store) => store.movieDetails.movieCast);

  const sendWatchListData = async () => {
    const WatchRef = await addDoc(collection(db, "WatchList"), {
      watchlist: watchlist,
    });
    console.log("watchList Stored");
  };

  const addWatchList = async () => {
    dispatch(addtowatchList(allmovieDetails));
    if (watchlist) {
      sendWatchListData();
    }
  };

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
    <div className="bg-blue-950 h-full flex flex-col">
      <CurrentmovieTrailer />
      <button
        onClick={addWatchList}
        className="text-white bg-purple-700 w-32 px-2 md:text-2xl text-xl font-semibold rounded-lg mb-9 p-4 m-auto"
      >
        Add To WatchList
      </button>
      <div className="flex text-white  m-auto flex-col bg-black opacity-70 ">
        <h2 className="mx-32 my-5  font-bold md:text-4xl text-xl">
          Name: {movieTitle}
        </h2>
        <p className="mx-32 my-5 font-semibold md:text-3xl">
          OverView: {movieOverview}
        </p>
        {Cast && <CastNames actor={Cast} />}
      </div>
    </div>
  );
};

export default MovieDetails;

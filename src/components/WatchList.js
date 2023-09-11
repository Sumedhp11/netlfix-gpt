import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { POSTER_URL_CDN } from "../utils/constants";
import { closeModal } from "../utils/watchlistSlice";

const WatchList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.watchlist.watchlistMovies);
  console.log(watchlist);
  return (
    <div className="w-1/2 right-[20%] p-5 bg-gray-600 absolute top-[20%] rounded-xl z-30">
      <button
        onClick={() => dispatch(closeModal())}
        className="float-right  bg-red-600 p-3 rounded-lg text-lg text-white"
      >
        Close
      </button>
      {watchlist !== null ? (
        watchlist.map((movie) => (
          <div key={movie.id} className="flex items-center my-8 border-b-2">
            <img
              className="w-24 md:w-48 rounded-lg pr-10"
              src={POSTER_URL_CDN + movie.poster_path}
              alt="movie_poster"
            />
            <p className="font-bold text-lg ml-5 ">{movie.title}</p>
            <button className="mx-5 font-semibold text-lg bg-purple-800 rounded-lg p-1 md:p-6">
              Remove From WatchList
            </button>
          </div>
        ))
      ) : (
        <h2>NO MOVIES IN WatchList...</h2>
      )}
    </div>
  );
};
export default WatchList;

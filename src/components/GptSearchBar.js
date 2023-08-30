import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only Give Me names Of 5 Movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,HouseFull";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[30%] lg:pt-[10%] flex justify-center">
      <form
        className="w-full lg:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 "
          placeholder={lang[selectedLanguage].gptSearchPlaceHolder}
        />
        <button
          className="font-semibold py-2 m-4 px-4 bg-red-700 col-span-3 text-white rounded-lg "
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

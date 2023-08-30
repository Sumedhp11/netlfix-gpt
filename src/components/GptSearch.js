import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import {LOGIN_BG} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen w-screen" src={LOGIN_BG} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="w-screen h-screen object-cover"
          src={LOGIN_BG}
          alt="bg-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;

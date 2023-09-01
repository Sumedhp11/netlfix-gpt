import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCast } from "../utils/movieDetailSlice";

const useGetCredit = (id) => {
  const dispatch = useDispatch();
  const getCredit = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addCast(json.cast.slice(0, 7)));
    console.log();
  };
  useEffect(() => {
    getCredit(id);
  }, []);
};

export default useGetCredit;

import { useSelector } from "react-redux";

const CurrentmovieTrailer = () => {
  const ytKey = useSelector((store) => store.movieDetails.currentMovieTrailer);
  if (ytKey === null) return null;

  const url =
    "https://www.youtube.com/embed/" +
    ytKey.key +
    "?autoplay=1&loop=1&controls=0&playlist=" +
    ytKey.key;
  //   console.log(ytKey.key);
  return (
    <div className="pt-[30%] lg:pt-[3%] flex justify-center pb-9">
      <iframe
        className="w-3/4  pt-[6%] aspect-video rounded-lg "
        src={url}
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default CurrentmovieTrailer;

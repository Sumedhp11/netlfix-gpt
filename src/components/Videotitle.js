import React from "react";

const Videotitle = ({ title, overview }) => {
  // console.log(title);
  // console.log(overview);
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 lg:px-24 absolute text-white bg-gradient-to-r from-black w-12/12">
      <h1 className="text-2xl lg:text-6xl font-bold ">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-lg w-1/4 sm:text-sm}">
        {overview}
      </p>
      <div className="my-4 lg:m-0">
        <button className="bg-white py-1 lg:py-4 px-3 lg:px-12 hover:bg-opacity-80 mx-2 text-xl text-black  rounded-lg">
          ▶️ Play
        </button>
        <button className="hidden lg:inline-block bg-gray-500 p-4 px-16 text-xl text-white bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;

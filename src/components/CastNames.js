import React from "react";

const CastNames = ({ actor }) => {
  const cast = actor;
  // console.log(actor);
  return (
    <div>
      <h2 className="mx-32 my-5  font-bold md:text-5xl text-xl">Cast:</h2>
      {cast &&
        cast.map((actor, index) => (
          <p
            className="mx-32 my-5 font-semibold md:text-2xl text-xl"
            key={index}
          >
            {actor.name} as {actor.character}
          </p>
        ))}
    </div>
  );
};

export default CastNames;

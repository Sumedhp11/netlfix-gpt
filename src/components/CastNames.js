import React from "react";

const CastNames = ({ actor }) => {
  const cast = actor;
  console.log(actor);
  return (
    <div>
      <h2 className="mx-32 my-5  font-bold text-5xl">Cast:</h2>
      {cast &&
        cast.map((actor) => (
          <p className="mx-32 my-5 font-semibold text-2xl">
            {actor.name} as {actor.character}
          </p>
        ))}
    </div>
  );
};

export default CastNames;

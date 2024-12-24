import React, { useMemo } from "react";

export const Tile = ({ name, description }) => {
  // console.log(description);

  function descriptionRender() {
    const keys = Object.keys(description);
    let count = 0;
    return keys.map(key => {
      count++;
      return <p className="tile" key={count}>{key} - {description[key]}</p>
      });
  };

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionRender()}
    </div>
  );
};

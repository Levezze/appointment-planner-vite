import React from "react";

export const Tile = ({ name, description }) => {
  console.log(description);

  function descriptionRender() {
    const keys = Object.keys(description);
    return keys.map(key => {
    return <p className="tile">{key} - {description[key]}</p>
    });
  };

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionRender()}
    </div>
  );
};

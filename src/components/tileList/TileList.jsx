import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
  function tileRender() {
    return array.map((contact, index) => {
      const { name, ...description } = contact;
      return <Tile key={index} name={name} description={description} />;
    });
  }
  
  return (
    <div>
      {tileRender()}
    </div>
  );
};

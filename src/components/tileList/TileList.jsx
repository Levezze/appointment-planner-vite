import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  function tileRender() {
    return contacts.map((contact, index) => {
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

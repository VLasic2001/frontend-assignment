import React from "react";
import "./grid.css";
import Character from "../character/character.js";

const Grid = ({ characters, handleBookmark }) => {
  return (
    <div className="character-grid">
      {characters.map((c, i) => {
        return (
          <Character
            handleBookmark={handleBookmark}
            key={i}
            id={c.id}
            name={c.name}
            thumbnail={c.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default Grid;

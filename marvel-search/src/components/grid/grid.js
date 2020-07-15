import React, { useState, useEffect } from "react";
import "./grid.css";
import Character from "../character/character.js";

const Grid = props => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(props.characters);
  }, []);

  return (
    <div className="character-grid">
      {characters.map((c, i) => {
        return (
          <Character key={i} id={c.id} name={c.name} thumbnail={c.thumbnail} />
        );
      })}
    </div>
  );
};

export default Grid;

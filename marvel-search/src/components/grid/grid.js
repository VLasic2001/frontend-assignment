import React, { Component } from "react";
import "./grid.css";
import Character from "../character/character.js";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: props.characters };
  }
  render() {
    return (
      <div className="character-grid">
        {this.state.characters.map((c, i) => {
          return (
            <Character
              key={i}
              id={c.id}
              name={c.name}
              imagePath={c.thumbnail.path + "." + c.thumbnail.extension}
            />
          );
        })}
      </div>
    );
  }
}

export default Grid;

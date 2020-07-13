import React, { Component } from "react";
import "./grid.css";
import Character from "../character/character.js";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] };
  }
  componentDidMount() {
    fetch(
      "http://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=58cc968ac4a6b192cb223b4a78a312f0&hash=054aa4102d88a21aa8eb760c2e6cc8fc"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          characters: result.data.results
        });
        console.log(result.data.results);
      });
  }

  render() {
    if (this.state.characters === []) return <div>Loading...</div>;
    return (
      <div className="character-grid">
        {this.state.characters.map(c => {
          return (
            <Character
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

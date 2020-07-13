import React, { Component } from "react";
import Grid from "../grid/grid";

class Main extends Component {
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
      });
  }
  render() {
    return (
      <main>
        <header>
          <span>Search: </span>
          <input placeholder="e. g. Spider-Man" />
        </header>
        {this.state.characters.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Grid characters={this.state.characters}></Grid>
        )}
      </main>
    );
  }
}

export default Main;

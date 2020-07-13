import React, { Component } from "react";
import Grid from "../grid/grid";

class Main extends Component {
  render() {
    return (
      <main>
        <header>
          <span>Search: </span>
          <input placeholder="e. g. Spider-Man" />
        </header>
        <Grid></Grid>
      </main>
    );
  }
}

export default Main;

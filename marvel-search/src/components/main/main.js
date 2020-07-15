import Grid from "../grid/grid";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [bookmarksLength, setBookmarksLength] = useState();

  const handleBookmark = (id, name, thumbnail) => {
    if (!localStorage.getItem(id) === null) {
      localStorage.setItem(
        id,
        JSON.stringify({
          name: name,
          thumbnail: thumbnail
        })
      );
    } else if (
      window.confirm(`Are you sure you want to remove bookmark for "${name}"?`)
    ) {
      localStorage.removeItem(id);
    }

    setBookmarksLength(localStorage.length);
  };

  useEffect(() => {
    var bookmarks = [];
    Object.keys(localStorage).forEach(k => {
      var character = JSON.parse(localStorage.getItem(k));
      character.id = k;
      bookmarks.push(character);
    });
    setBookmarks(bookmarks);
    // fetch(
    //   "http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=58cc968ac4a6b192cb223b4a78a312f0&hash=054aa4102d88a21aa8eb760c2e6cc8fc"
    // )
    //   .then(res => res.json())
    //   .then(result => {
    //     setCharacters(result.data.results);
    //   });
  }, [bookmarksLength]);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  return (
    <main>
      <header>
        <span>Search: </span>
        <input
          onChange={e => handleInputChange(e)}
          value={searchInput}
          placeholder="e. g. Spider-Man"
        />
      </header>
      {/* {console.log(bookmarks)} */}
      {bookmarks.length > 0 && characters.length === 0 && (
        <Grid handleBookmark={handleBookmark} characters={bookmarks}></Grid>
      )}
      {bookmarks.length === 0 && characters.length === 0 && (
        <div>Loading...</div>
      )}
      {characters.length > 0 && (
        <Grid handleBookmark={handleBookmark} characters={characters}></Grid>
      )}
    </main>
  );
};

export default Main;

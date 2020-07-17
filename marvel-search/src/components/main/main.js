import Grid from "../grid/grid";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { replaceCharacters } from "../../redux/actions/index";
import Pagination from "@material-ui/lab/Pagination";
import "./main.css";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [total, setTotal] = useState(0);
  const [bookmarksLength, setBookmarksLength] = useState();
  const [pageIndex, setPageIndex] = useState(1);

  const searchCharacters = useSelector((state) => state.searchCharacters);
  const searchTotal = useSelector((state) => state.total);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleBookmark = (id, name, thumbnail) => {
    if (localStorage.getItem(id) === null) {
      localStorage.setItem(
        id,
        JSON.stringify({
          name: name,
          thumbnail: thumbnail,
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
    Object.keys(localStorage).forEach((k) => {
      var character = JSON.parse(localStorage.getItem(k));
      character.id = k;
      bookmarks.push(character);
    });
    setBookmarks(bookmarks.splice((pageIndex - 1) * 20, 20));
  }, [bookmarksLength, pageIndex]);

  useEffect(() => {
    setCharacters(searchCharacters);
  }, [searchCharacters]);

  useEffect(() => {
    setTotal(searchTotal);
  }, [searchTotal]);

  useEffect(() => {
    if (searchInput === "" && characters.length !== 0) {
      setPageIndex(1);
    }

    dispatch(replaceCharacters({ searchInput, page: pageIndex }));
  }, [searchInput, pageIndex]);

  const handleInputChange = (e) => {
    if (searchInput === "") {
      setPageIndex(1);
    }
    setSearchInput(e.target.value);
  };

  const handlePagination = (value) => {
    setPageIndex(value);
  };

  let main = <div />;

  if (bookmarks.length > 0 && characters !== null && characters.length === 0) {
    main = (
      <div>
        <span className="bookmarked__characters__title">
          Bookmarked characters:
        </span>
        <span className="pagination">
          Page:{" "}
          <Pagination
            count={Math.ceil(localStorage.length / 20)}
            page={pageIndex}
            onChange={(e, v) => handlePagination(v)}
          />
        </span>
        <Grid handleBookmark={handleBookmark} characters={bookmarks} />
      </div>
    );
  } else if (loading) {
    main = <div className="loading">Loading...</div>;
  } else if (characters !== null && characters.length > 0 && !loading) {
    main = (
      <div>
        <span className="pagination">
          Page:{" "}
          <Pagination
            count={Math.ceil(total / 20)}
            page={pageIndex}
            onChange={(e, v) => handlePagination(v)}
          />
        </span>
        <Grid handleBookmark={handleBookmark} characters={characters}></Grid>
      </div>
    );
  } else if (characters === null) {
    main = <div>There are no characters that match the search</div>;
  } else if (
    bookmarks.length === 0 &&
    characters !== null &&
    characters.length === 0
  ) {
    main = <div>No characters are currently bookmarked</div>;
  }

  return (
    <main>
      <header>
        <span className="search--title">Search: </span>
        <input
          className="search--input"
          onChange={(e) => handleInputChange(e)}
          value={searchInput}
          placeholder="e. g. 'Spi' or 'Spider-Man'"
        />
      </header>
      {/* <input type="number"></input> */}
      {main}
    </main>
  );
};

export default Main;

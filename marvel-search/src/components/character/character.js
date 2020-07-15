import React, { useState, useEffect } from "react";
import "./character.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkFilled from "../../images/bookmark-filled.svg";

const Character = ({ id, name, thumbnail }) => {
  const [bookmarked, setBookmarked] = useState(
    localStorage.getItem(id) !== null
  );

  const handleBookmarkclick = () => {
    if (!bookmarked) {
      localStorage.setItem(
        id,
        JSON.stringify({
          name: name,
          thumbnail: thumbnail
        })
      );
    } else {
      localStorage.removeItem(id);
    }
    setBookmarked(!bookmarked);
  };
  if (name === null) {
    return <div />;
  }
  return (
    <div>
      <div className="character__info">
        <p>{name}</p>
        <img
          alt="bookmark"
          className="character__info__bookmark"
          src={localStorage.getItem(id) ? bookmarkFilled : bookmark}
          onClick={() => handleBookmarkclick()}
        ></img>
      </div>
      <img
        alt={name}
        className="character__image"
        src={thumbnail.path + "." + thumbnail.extension}
      ></img>
    </div>
  );
};

export default Character;

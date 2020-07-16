import React from "react";
import "./character.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkFilled from "../../images/bookmark-filled.svg";

const Character = ({ id, name, thumbnail, handleBookmark }) => {
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
          onClick={() => handleBookmark(id, name, thumbnail)}
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

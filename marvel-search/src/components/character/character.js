import React from "react";
import "./character.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkFilled from "../../images/bookmark-filled.svg";

const Character = ({ id, name, thumbnail, handleBookmark }) => {
  if (name === null) {
    return <div />;
  }
  return (
    <div className="character">
      <div className="character__info">
        <span className="character__info__name">{name}</span>
        <img
          alt="bookmark"
          className="character__info__bookmark"
          src={localStorage.getItem(id) ? bookmarkFilled : bookmark}
          onClick={() => handleBookmark(id, name, thumbnail)}
        ></img>
      </div>
      <span className="character__image--container">
        <img
          alt={name}
          className="character__image"
          src={thumbnail.path + "." + thumbnail.extension}
        ></img>
      </span>
    </div>
  );
};

export default Character;

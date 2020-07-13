import React, { Component } from "react";
import "./character.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkFilled from "../../images/bookmark-filled.svg";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: localStorage.getItem(props.id) !== null,
      id: props.id,
      name: props.name,
      imagePath: props.imagePath
    };
  }
  handleBookmarkclick() {
    if (!this.state.bookmarked) {
      localStorage.setItem(
        this.state.id,
        JSON.stringify({
          name: this.state.name,
          imagePath: this.state.imagePath
        })
      );
    } else {
      localStorage.removeItem(this.state.id);
    }
    this.setState({ bookmarked: !this.state.bookmarked });
  }
  render() {
    if (this.state.name === null) {
      return <div />;
    }
    return (
      <div>
        <div className="character__info">
          <p>{this.state.name}</p>
          <img
            alt="bookmark"
            className="character__info__bookmark"
            src={
              localStorage.getItem(this.state.id) ? bookmarkFilled : bookmark
            }
            onClick={() => this.handleBookmarkclick()}
          ></img>
        </div>
        <img
          alt={this.state.name}
          className="character__image"
          src={this.state.imagePath}
        ></img>
      </div>
    );
  }
}

export default Character;

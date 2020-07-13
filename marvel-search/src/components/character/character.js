import React, { Component } from "react";
import "./character.css";
import bookmark from "../../images/bookmark.svg";
import bookmarkFilled from "../../images/bookmark-filled.svg";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
      name: props.name,
      imagePath: props.imagePath
    };
  }
  handleBookmarkclick() {
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
            className="character__info__bookmark"
            src={this.state.bookmarked ? bookmarkFilled : bookmark}
            onClick={() => this.handleBookmarkclick()}
          ></img>
        </div>
        <img className="character__image" src={this.state.imagePath}></img>
      </div>
    );
  }
}

export default Character;

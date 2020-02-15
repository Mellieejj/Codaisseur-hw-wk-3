import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    like: false,
    dislike: false,
    style: { color: "black" }
  };

  like = () => {
    this.setState({
      like: true,
      dislike: false,
      style: { color: "green" }
    });
  };

  dislike = () => {
    this.setState({
      like: false,
      dislike: true,
      style: { color: "red", textDecorationLine: "line-through" }
    });
  };

  render() {
    return (
      <div>
        <div className="quoteWithAuthor" style={this.state.style}>
          <p>{this.props.quoteText}</p>
          <p>By {this.props.quoteAuthor}</p>
        </div>
        <div className="LikeDislike">
          <button className="Like" onClick={this.like}>
            <i className="far fa-smile"></i>
          </button>
          <button className="Dislike" onClick={this.dislike}>
            <i className="far fa-frown"></i>
          </button>
        </div>
      </div>
    );
  }
}

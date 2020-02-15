import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
  };
  renderQuote = quote => {
    return (
      <Quote
        key={quote._id}
        quoteText={quote.quoteText}
        quoteAuthor={quote.quoteAuthor}
      />
    );
  };

  render() {
    return (
      <div className="quotes">
        <h1>Quotes ! </h1>
        <div>{this.state.quotes.map(this.renderQuote)}</div>
      </div>
    );
  }
}

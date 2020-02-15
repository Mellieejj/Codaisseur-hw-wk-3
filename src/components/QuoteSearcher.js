import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data => {
        console.log("fetching data", data);
        const quotesTree = data.results.map(quote => quote);
        this.setState({
          quotes: quotesTree
        });
      });
  }

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

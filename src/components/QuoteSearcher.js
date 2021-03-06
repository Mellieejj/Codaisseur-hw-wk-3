import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: true,
    search: ""
  };

  // componentDidMount() {
  //   fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("fetching data", data);
  //       const quotesTree = data.results.map(quote => quote);
  //       this.setState({
  //         quotes: quotesTree,
  //         fetching: false,
  //         liked: 0,
  //         disliked: 0
  //       });
  //     })
  //     .catch(console.error);
  // }

  search = () => {
    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${this.state.search}`
    )
      .then(response => response.json())
      .then(data => {
        console.log("fetching data", data);
        const quotesTree = data.results.map(quote => quote);
        // console.log(quotesTree);

        this.setState({
          quotes: quotesTree,
          fetching: false,
          liked: 0,
          disliked: 0
        });
      })
      .catch(error => {
        console.log(error);
        return this.setState({ fetching: false, quotes: [] });
      });
  };

  renderQuote = quote => {
    return (
      <Quote
        key={quote._id}
        quoteText={quote.quoteText}
        quoteAuthor={quote.quoteAuthor}
        like={quote.like}
      />
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("search form...");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log("state", this.state);

    return (
      <div className="quotes">
        <h1>Quotes ! </h1>

        <div className="searchBar">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="typ a keyword"
              onChange={this.handleChange}
              value={this.state.search}
            />
            <button onClick={this.search}>Search</button>
          </form>
        </div>

        <div className="likeDislikeCounting">
          <h3>
            Like: {this.state.liked} / Dislike: {this.state.disliked}
          </h3>
        </div>

        <div>
          {this.state.search === "" && "Typ a keyword to search for a Quote! "}
          {this.state.fetching === true &&
            this.state.search !== "" &&
            "Quotes are loading..."}
          {this.state.fetching === false &&
            this.state.quotes.length === 0 &&
            "No quotes found with this keyword, try again with another keyword"}
          {this.state.fetching === false &&
            this.state.quotes.map(this.renderQuote)}
        </div>
      </div>
    );
  }
}

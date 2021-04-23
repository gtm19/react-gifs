import React, { Component } from "react";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

// eslint-disable-next-line prefer-destructuring
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gif: "",
      gifs: []
    };
    
    // start with a random gif
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&rating=g`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ gif: data.data.id });
      });
  }


  search = (q) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${q}&limit=10&rating=g`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif gif={this.state.gif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

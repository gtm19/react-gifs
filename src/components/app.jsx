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
    this.random();

    // NOTE: Binding is necessary if functions are not defined using arrow method
    // see https://reactjs.org/docs/handling-events.html
    this.search = this.search.bind(this);
    this.updateGif = this.updateGif.bind(this);
  }

  search(q) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${q}&limit=10&rating=g`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      });
  }

  updateGif(id) {
    this.setState({ gif: id });
    console.log("gif updated");
  }

  random() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&rating=g`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ gif: data.data.id });
      });
  }

  render() {
    const { gif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif gif={gif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} updateFunction={this.updateGif} />
        </div>
      </div>
    );
  }
}

export default App;

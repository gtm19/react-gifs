import React, { Component } from "react";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gif: "WpIjh42KPontoNSF0J",
      gifs: [
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" },
        { gif: "WpIjh42KPontoNSF0J" }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
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
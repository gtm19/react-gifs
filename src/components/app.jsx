import React, { Component } from "react";
import SearchBar from "./search_bar";

const Gif = (props) => {
  const src = `https://media2.giphy.com/media/${props.gif}/200.gif`;
  return (
    <img src={src} className="gif"/>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gif: "WpIjh42KPontoNSF0J",
      gifs: [
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"},
        {id: "WpIjh42KPontoNSF0J"}
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gif={this.state.gif}/>
          </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
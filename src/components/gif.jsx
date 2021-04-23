import React, { Component } from "react";

class Gif extends Component {

  handleClick = (event) => {
    const { updateFunction } = this.props;
    if (updateFunction) {
      updateFunction(event.target.id);
    }
  };

  render() {
    const { gif } = this.props;
    const src = `https://media2.giphy.com/media/${gif}/200.gif`;
    return (
      <img src={src} id={gif} alt="a gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

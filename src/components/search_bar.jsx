import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <input className="form-search form-control" type="text" name="gif-search" id="gif-search"/>
    );
  }
};

export default SearchBar;
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
  handleChange = (event) => {
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
  }

  render() {
    return (
      <span>
        <FontAwesomeIcon icon={faSearch} id="search-icon" />
        <input className="form-search form-control" type="text" name="gif-search" id="gif-search" onChange={this.handleChange} />
      </span>
    );
  }
}

export default SearchBar;

/// <reference path="../../typings/index.d.ts" />

import React, { Component } from 'react';
// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
  }
  render() {
    return (
      <input onChange={this.onInputChange}/>
    );
  }

  onInputChange(event) {
    console.log(event)
  }
}

export default SearchBar;
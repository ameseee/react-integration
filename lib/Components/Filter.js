import React, { Component } from "react";
import filterFoods from '../helpers/filterHelper.js';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filterInput: ''
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(event) {
    const value = event.target.value
    const filterInput = value.toUpperCase()

    this.setState({ filterInput })
    filterFoods(filterInput)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={ this.state.filterInput }
          onChange={ this.handleFilter }
        >
        </input>
      </div>
    )
  }
}

export default Filter;

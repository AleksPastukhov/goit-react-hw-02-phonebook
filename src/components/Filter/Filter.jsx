import React, { Component } from 'react';

class Filter extends Component {
  handleInput = e => {
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.handleInput}
        />
      </label>
    );
  }
}

export default Filter;

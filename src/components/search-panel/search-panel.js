import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = e => {
    this.setState({
      term: e.target.value,
    });

    this.props.onSearchChange(this.state.term);
  };

  render() {
    return (
      <input
        class="form-control"
        type="text"
        placeholder="Type to search..."
        value={this.state.value}
        onChange={this.onSearchChange}
      />
    );
  }
}

import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onSubmit = e => {
    e.preventDefault();
    let { label } = this.state;
    if (label) {
      this.props.addItem(label);
      this.setState({
        label: ''
      })
    }
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex mt-4" onSubmit={this.onSubmit}>
        <input
          value={this.state.label}
          type="text"
          className="form-control mr-2"
          onChange={this.onLabelChange}
        />
        <button className="btn btn-primary">Add Task</button>
      </form>
    );
  }
}

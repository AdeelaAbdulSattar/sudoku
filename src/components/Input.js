import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <input
        className="input"
        type="number"
        name="value"
        value={this.props.value}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default Input;

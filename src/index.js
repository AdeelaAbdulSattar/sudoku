import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Div from "./components/Div";

class Sudoku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div>
        <h1>Suzoku!</h1>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
      </div>
    );
  }
}

ReactDOM.render(<Sudoku />, document.getElementById("root"));

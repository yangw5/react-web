import React, { Component } from "react";
import { felsit } from "../../axios";
// 加载mock
import "../../mock.js";

class FrontEnd extends Component {
  componentDidMount() {
    felsit();
  }
  render() {
    return <div>Frontend</div>;
  }
}

export default FrontEnd;

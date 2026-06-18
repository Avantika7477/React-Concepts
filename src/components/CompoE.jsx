import React, { Component } from "react";
import CompoF from "./CompoF";
import UseContext from "./UseContext";
class CompoE extends Component {
  static contextType = UseContext;
  render() {
    return (
      <div>
        component E context value is {this.context}
        <CompoF />
      </div>
    );
  }
}
CompoE.contextType = UseContext;

export default CompoE;

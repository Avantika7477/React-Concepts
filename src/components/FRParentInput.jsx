import React, { Component } from "react";
import Refsinclas from "./Refsinclas";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.Inputref = React.createRef();
  }

  render() {
    return (
      <div>
        <Refsinclas />
        <button>Focous Input</button>
      </div>
    );
  }
}

export default FRParentInput;

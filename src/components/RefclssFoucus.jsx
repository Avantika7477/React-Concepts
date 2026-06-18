import React, { Component } from "react";
import Refsinclas from "./Refsinclas";

class RefclssFoucus extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  ClickHandler = () => {
    this.componentRef.current.foucusInput();
  };
  render() {
    return (
      <div>
        <Refsinclas ref={this.componentRef}></Refsinclas>
        <button onClick={this.ClickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default RefclssFoucus;

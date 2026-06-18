import React, { Component } from "react";
class Refsinclas extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  foucusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" placeholder="Write here" />
      </div>
    );
  }
}

export default Refsinclas;

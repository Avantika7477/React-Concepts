import React, { Component } from "react";
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  ClickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" placeholder="Write here" />
        <button onClick={this.ClickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default RefsDemo;

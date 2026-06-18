import React, { Component } from "react";

class HoverClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseMove={this.increment}>hover {count} times</h1>
      </div>
    );
  }
}

export default HoverClick;

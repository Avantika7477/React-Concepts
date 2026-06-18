import React, { Component } from "react";

class HoverClick2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseMove={this.incrementCount}>Hover {count}times</h2>
      </div>
    );
  }
}

export default HoverClick2;

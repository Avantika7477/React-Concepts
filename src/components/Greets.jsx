import React, { Component } from "react";
class Greets extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <>
        <h1>
          welcome, {name}! {heroName}
        </h1>
        <p> this is class based component</p>
      </>
    );
  }
}
export default Greets;

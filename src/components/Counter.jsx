import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    //   this.setState(
    //     {
    //       count: this.state.count + 1,
    //     },
    //     () => {
    //       console.log("callback value", this.state.count); //callback function is used to get the updated value of state after setState is called because setState is asynchronous and it may not update the state immediately. So, if we want to get the updated value of state after setState is called, we can use a callback function which will be called after the state is updated.
    //     },
    //   );
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count); //sycronus
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    );
  }
}
export default Counter;

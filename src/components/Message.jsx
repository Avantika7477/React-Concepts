import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Visitors",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for Visiting Us",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change Message</button>
      </>
    );
  }
}
export default Message;

import React, { Component } from "react";
import { UserConsumer } from "./UseContext";

class CompoF extends Component {
  render() {
    return (
      // consumed the context vale
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default CompoF;

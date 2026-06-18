import React, { Component } from "react";

class RegCopm extends Component {
  render() {
    console.log("Regular component render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegCopm;

import React, { Component } from "react";
// import RegCopm from "./RegCopm";
// import PureComp from "./PureComp";
import MemoCopm from "./MemoComp";
class Parentcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Avantika",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Avantika" });
    }, 2000);
  }
  render() {
    console.log("Parent component render");
    return (
      <div>
        <h1>parent component</h1>
        {/* <RegCopm name={this.state.name}> </RegCopm>;
        <PureComp name={this.state.name}></PureComp>; */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default Parentcomp;

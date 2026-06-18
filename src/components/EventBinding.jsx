import { Component } from "react";
class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // this.ClickHandler = this.ClickHandler.bind(this);
  }
  // ClickHandler() {
  //   this.setState({
  //     message: "Goodbye",
  //   });
  //   console.log(this);
  // }
  ClickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.ClickHandler()}>Click</button> */}
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBinding;

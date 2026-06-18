import React from "react";
const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello World i am js</h1>
  //   </div>
  // );
  // without jsx
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { id: "hello" }, "Hello World i am js"),
  );
};
export default Hello;

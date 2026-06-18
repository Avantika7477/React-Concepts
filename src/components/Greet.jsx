import React from "react";
// function Greet() {
//   return (
//     <>
//       <h1>Hello, Avantika!</h1>
//     </>
//   );
// }
// named export
// export const Greet = () => <h1>Hello, Avantika!</h1>;
const Greet = ({ name, heroname }) => {
  return (
    <>
      <h1>
        Hello, {name}! & {heroname}
      </h1>
      {/* <p>This is a function components with props</p> */}
    </>
  );
};
export default Greet;

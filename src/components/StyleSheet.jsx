import React from "react";
import "./stylemy.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={`${className}  font-xl`}>StyleSheet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa
        quidem ea consequuntur rem. Cupiditate modi repudiandae, eos quo est cum
        odit pariatur, dolor id neque sapiente deserunt expedita! Modi.
      </p>
    </div>
  );
}

export default StyleSheet;

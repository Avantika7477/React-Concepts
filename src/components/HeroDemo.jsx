import React from "react";

function HeroDemo(heroName) {
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroName}</div>;
}

export default HeroDemo;

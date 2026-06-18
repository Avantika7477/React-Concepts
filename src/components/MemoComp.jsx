import React from "react";

function MemoComp({ name }) {
  console.log("Memo component render");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);

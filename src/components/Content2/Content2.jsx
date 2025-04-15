import React, { memo } from "react";

function Content2({ counter, onIncrease }) {
  console.log("first");
  return (
    <>
      <div>Content2: {counter}</div>
      <button onClick={onIncrease}>Add</button>
    </>
  );
}

export default memo(Content2);

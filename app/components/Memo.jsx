"use client";
import React, { useCallback, useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

//   const Memo = useMemo(() => value(count), [count]);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Count barhao</button>
    </>
  );
};

export default Memo;

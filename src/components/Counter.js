// import { useState } from "react";

import Count from "./Count";

export default function Counter({ count, id, increment, decrement }) {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {/* <div className="text-2xl font-semibold">{count}</div> */}
      <Count count={count}></Count>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => increment(id)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrement(id)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

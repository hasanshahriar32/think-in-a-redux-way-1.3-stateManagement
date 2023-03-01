import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];

export default function App() {
  const [state, setState] = useState(initialState);
  const totalCount = () => {
    return state.reduce((acc, curr) => acc + curr.count, 0);
  };
  // const stat = 0;
  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return { ...c, count: c.count + 1 };
      }
      return { ...c };
    });
    setState(updatedCounter);
    // console.log(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return { ...c, count: c.count - 1 };
      }
      return { ...c };
    });
    setState(updatedCounter);
    // console.log(updatedCounter);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Stats count={totalCount()}></Stats>
        {/* {console.log(totalCount())} */}
        {state.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            count={count.count}
            increment={increment}
            decrement={decrement}
          />
        ))}
        {/* <Counter id={id} increment={increment} decrement={decrement} /> */}
        {/* <Counter increment={increment} decrement={decrement} /> */}
        {/* <Counter />
        <Counter />
        <Counter /> */}
      </div>
    </div>
  );
}

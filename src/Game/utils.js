import { useEffect, useRef, useState } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export const usePlayer = (initial) => {
  const [count, setCount] = useState(initial);
  useInterval(() => {
    if (count >= 0) {
      setCount(count + 1);
    }
  }, 1000);

  const onDragStart = (e, count, player) => {
    // let data = player === "player1" ? { player1: count } : { player2: count };
    if (count > 0) {
      e.dataTransfer.setData("count", count);
      console.log(...e.dataTransfer.getData("count"));
      setCount(0);
    }
  };
  const onDrop = (e, count) => {
    let data = e.dataTransfer.getData("count");
    console.log(data);
    setCount(Number(data) + count);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setCount(0);
  };
  return { clickHandler, onDragStart, onDragOver, onDrop, count };
};

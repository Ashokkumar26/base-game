import React, { useState, useEffect } from "react";

export default function Container() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  const onDragStart = (e, count) => {
    e.dataTransfer.setData("count", count);
    setCount(0);
  };
  const onDrop = (e, count) => {
    let data = e.dataTransfer.getData("count");
    setCount(Number(data) + count);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="circle blue"
      onDragStart={(e) => onDragStart(e, count)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, count)}
      draggable
    >
      {count}
    </div>
  );
}

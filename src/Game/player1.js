import React from "react";
import castle1 from "./images/castle1.png";
import "./Background.css";
import { usePlayer } from "./utils";

export default function Container1({ initial }) {
  const { count, onDragOver, onDragStart, onDrop, clickHandler } = usePlayer(
    initial
  );
  return (
    <td className="column">
      <img
        className="image"
        src={castle1}
        alt=""
        onDragStart={(e) => onDragStart(e, count, "player1")}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, count)}
        // onClick={clickHandler}
        draggable
      />
      <h4 className="span" draggable>
        {count >= 0 ? (
          <span style={{ color: "green" }}>{count}</span>
        ) : (
          <span>req{count}</span>
        )}
      </h4>
    </td>
  );
}

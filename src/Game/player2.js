import React from "react";
import castle2 from "./images/castle2.png";
import "./Background.css";
import { usePlayer } from "./utils";

export default function Container2({ initial }) {
  const { count, onDragOver, onDragStart, onDrop } = usePlayer(initial);
  return (
    <td className="columnRight">
      <img
        className="image"
        src={castle2}
        alt=""
        onDragStart={(e) => onDragStart(e, count, "player2")}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, count)}
        draggable
      />
      <h4 className="span">
        {count >= 0 ? (
          <span style={{ color: "red" }}>{count}</span>
        ) : (
          <span>req{count}</span>
        )}
      </h4>
    </td>
  );
}

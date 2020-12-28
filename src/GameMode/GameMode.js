import React from "react";
import "./mode.css";
import { useHistory } from "react-router-dom";

export default function GameMode({ name }) {
  const history = useHistory();
  const EnterGame = () => {
    history.push("/game");
  };
  return (
    <div className="body">
      <ul>
        <h1>{name}</h1>
        <li onClick={EnterGame}>
          <span>EASIER</span>
        </li>
        <li onClick={EnterGame}>
          <span>ACHIEVER</span>
        </li>
        <li onClick={EnterGame}>
          <span>CHALLENGER</span>
        </li>
      </ul>
    </div>
  );
}

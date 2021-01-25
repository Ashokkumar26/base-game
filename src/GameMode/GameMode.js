import React from "react";
import "./mode.css";
import { useHistory } from "react-router-dom";

export default function GameMode({ name }) {
  const history = useHistory();
  const names = history.location.state;
  const EnterGame = () => {
     history.push("/vs", names);
  };
  return (
    <div className="body">
      <ul>
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

import React from "react";
import { useHistory } from "react-router-dom";
import planet from "./planet.jpg";
import "./screen.css";
export default function Screen() {
  const history = useHistory();
  const click = () => {
    history.push("./selectplayers");
  };
  return (
    <div>
      <img src={planet} alt="" className="background" />
      <button className="clickbtn" onClick={click}>
        Enter Game!
      </button>
    </div>
  );
}

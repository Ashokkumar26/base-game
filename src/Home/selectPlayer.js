import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

export default function Players() {
  const history = useHistory();
  const click1 = () => {
    history.push("./screen", { player: "yes" });
  };
  const click2 = () => {
    history.push("./screen", { player: "no" });
  };
  return (
    <>
      <div class="wrapper">
        <button style={{ marginRight: "10px" }} onClick={click1}>
          Play with Friend
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button onClick={click2}>
          Play with Computer
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
}

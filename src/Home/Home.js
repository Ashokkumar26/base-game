import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import GameMode from "../GameMode/GameMode";
export default function Home() {
  const [name, setName] = useState("");
  const history = useHistory();
  const clck = () => {
    history.push("./modes");
  };
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div class="wrapper">
        <div class="input-group">
          <input
            value={name}
            class="form-control"
            type="text"
            name="text-1542372332072"
            id="text-1542372332072"
            required="required"
            placeholder="Enter Name"
            onChange={changeHandler}
          />
          <label for="text-1542372332072">Enter Name</label>
          <div class="req-mark">!</div>
        </div>
        <button onClick={clck}>
          Enter Game!
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {1 > 2 && <GameMode name={name} />}
    </>
  );
}

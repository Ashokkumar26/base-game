import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
export default function Home() {
  const history = useHistory();
  const players = history.location.state;
  const [name, setName] = useState({ name1: "", name2: "" });
  const [flag, setFlag] = useState("");
  const clck = () => {
    players.player === "no"
      ? name.name1
        ? history.push("./modes", name)
        : setFlag(false)
      : name.name1 && name.name2
      ? history.push("./vs", name)
      : setFlag(false);
  };
  const changeHandler1 = (e) => {
    setName({ ...name, name1: e.target.value });
  };
  const changeHandler2 = (e) => {
    setName({ ...name, name2: e.target.value });
  };

  return (
    <>
      <div className="wrapper">
        <div className="input-group">
          <input
            value={name.name1}
            className="form-control"
            type="text"
            name="text-1542372332072"
            id="text-1542372332072"
            required="required"
            placeholder="Enter Name"
            onChange={changeHandler1}
          />
          <label for="text-1542372332072">Player 1</label>
          <div className="req-mark">!</div>
        </div>
        {players && players.player === "yes" && (
          <div className="input-group">
            <input
              value={name.name2}
              className="form-control"
              type="text"
              name="text-1542372332072"
              id="text-1542372332072"
              required="required"
              placeholder="Enter Name"
              onChange={changeHandler2}
            />
            <label for="text-1542372332072">Player 2</label>
            <div className="req-mark">!</div>
          </div>
        )}

        <button onClick={clck}>
          Enter Game!
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {flag === false && (
          <h6 style={{ color: "red" }}>please enter your name</h6>
        )}
      </div>
    </>
  );
}

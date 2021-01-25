import React, { useEffect } from "react";
import versus from "./versus.png";
import castle1 from "../Game/images/castle1.png";
import castle2 from "../Game/images/castle2.png";
import "./versus.css";
import { useHistory } from "react-router-dom";
export default function Versus() {
  const history = useHistory();
  const names = history.location.state;
  useEffect(() => {
    setTimeout(() => {
      history.push("./game", names);
    }, 3000);
  }, []);
  return (
    <div className="versuse">
      <div className="nameTag">
        <h1>{names && names.name1 && names.name1}</h1>
        <img src={castle1} className="versus" />
      </div>
      <img src={versus} alt="" className="nameTag" />
      <div className="nameTag">
        <h1>{names && names.name2 ? names.name2 : "Computer"}</h1>
        <img src={castle2} alt="" className="versus" />
      </div>
    </div>
  );
}

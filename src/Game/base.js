import React from "react";
import "./base.css";
import Container1 from "./player1";
import Container2 from "./player2";
import castle from "./images/castle.png";
import "./Background.css";

function Base({ array }) {
  return (
    <section className="pattern-container">
      <div className="base64">
        <div className="outerSide">
          <table>
            <tbody>
              {array.map(() => (
                <tr>
                  <td key>
                    <Container1 initial={-20} />
                  </td>
                  <td key>
                    <Container1 initial={-30} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span style={{ position: "absolute", top: "40%", left: "25%" }}>
            <Container1 initial={0} />
          </span>
          <div className="center">
            <img className="middle" src={castle} />
          </div>
          <span style={{ position: "absolute", top: "40%", right: "25%" }}>
            <Container2 initial={0} />
          </span>
          <table className="tableRight">
            <tbody>
              {array.map(() => (
                <tr>
                  <td key>
                    <Container2 initial={-20} />
                  </td>
                  <td key>
                    <Container2 initial={-30} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default Base;

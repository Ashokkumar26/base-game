import React from "react";
import "./base.css";
import Container from "./container";

function Base({ array }) {
  return (
    <div class="grid-container">
      {array.map((data) => (
        <Container />
      ))}
    </div>
  );
}
export default Base;

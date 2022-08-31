import React from "react";
// import { Link } from "react-router-dom";

export default function Recommended({ recommended }) {
  return (
    <article className="Recommended">
      <h4>{recommended.name}</h4>
    </article>
  );
}

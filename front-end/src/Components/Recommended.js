import React from "react";
import { Link } from "react-router-dom";

const Recommendation = ({ recommendation }) => {
  return (
    <article className="Recommendation">
      <h4>{recommendation.name}</h4>
      <div className="Recommendation__image">
        <img
          src={recommendation.image}
          alt={
            recommendation.is_expensive ? "inexpensive gear" : "expensive gear"
          }
        />
      </div>
      <button>
        <Link to={`/recommended/${recommendation.id}`}>
          Recommendation Price Details
        </Link>
      </button>
    </article>
  );
};

export default Recommendation;

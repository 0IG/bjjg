import React from "react";
import { Link } from "react-router-dom";
// import HeartHealth from './HeartHealth.js';

const Recommendation = ({ recommendation }) => {
  return (
    <article className="Recommendation">
      <h4>{recommendation.name}</h4>
      <span>
        <HeartHealth healthCheck={recommendation.is_expensive} />
      </span>
      <div className="Recommendation__image">
        <img
          src={recommendation.image}
          alt={
            recommendation.is_expensive ? "inexpensive gear" : "expensive gear"
          }
        />
      </div>
      <button>
        <Link to={`/recommendation/${recommendation.id}`}>
          Recommendation Price Details
        </Link>
      </button>
    </article>
  );
};

export default Recommendation;

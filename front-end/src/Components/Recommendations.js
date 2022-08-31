import axios from "axios";
import Recommended from "./Recommended";
import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recommendation/`)
      .then((response) => {
        setRecommendations(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <section className="Recommendations">
      {recommendations.length > 0
        ? recommendations.map((recommended, index) => {
            return <Recommended key={index} snack={recommended} />;
          })
        : null}
    </section>
  );
};

export default Recommendations;

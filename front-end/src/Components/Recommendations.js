import axios from "axios";
import Recommended from "./Recommended";
import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recommended`)
      .then((response) => {
        setRecommendations(response.data.payload);
      })
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <section className="Recommendations">
      {recommendations.length > 0
        ? recommendations.map((recommended, index) => {
            return <Recommended key={index} recommendation={recommended} />;
          })
        : null}
    </section>
  );
}

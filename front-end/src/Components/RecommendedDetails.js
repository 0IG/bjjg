import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const RecommendationDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/recommended/${id}`)
      .then((res) => setRecommendation(res.data.payload))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/recommendation/${id}`)
      .then(() => navigate("/recommendation"))
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <div>
        {/* <aside>
          <HeartHealth healthCheck={recommendation.is_healthy} CHECK PRICE/>
        </aside> */}

        <h4>{recommendation.name}</h4>

        <article>
          <div>
            <img src={recommendation.image} alt={recommendation.name} />
          </div>
        </article>
      </div>

      <div>
        <h5>Gear Information:</h5>
      </div>

      <div>Price: {recommendation.price}</div>
      <div>Rating: {recommendation.rating}</div>
      <div>User Submitted: {recommendation.is_user_submitted} </div>
      <div>Is Expensive: {recommendation.is_expensive}</div>
      <div>Link: {recommendation.link}</div>
      <div>
        {recommendation.is_expensive ? (
          <h4>This gear is inexpensive</h4>
        ) : (
          <h4>This gear is expensive</h4>
        )}
      </div>

      <div>
        <Link to="/recommendation">
          <button>Go Back</button>
        </Link>

        <Link to={`/recommendation/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
};

export default RecommendationDetails;

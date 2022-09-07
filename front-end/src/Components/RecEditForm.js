import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function RecEditForm() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [recommendation, setRecommendation] = useState({
    name: "",
    price: 0,
    rating: 0,
    is_user_submitted: false,
    is_expensive: false,
    image: "",
    link: "",
  });

  const updateRec = (recommendation) => {
    axios
      .put(`${API}/recommended/${id}`, recommendation)
      .then(() => navigate(`/recommended`))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${API}/recommended/${id}`)
      .then((response) => setRecommendation(response.data.payload))
      .catch((error) => console.error(error));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setRecommendation({
      ...recommendation,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRec(recommendation);
  };

  const handleCheckboxChange = (event) => {
    setRecommendation({
      ...recommendation,
      [event.target.id]: !recommendation[event.target.id],
    });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Gear's Image:</label>
        <input
          id="image"
          type="text"
          value={recommendation.image}
          onChange={handleTextChange}
          placeholder="https://..."
          required
        />
        <label htmlFor="price">Gear's Price:</label>
        <input
          id="price"
          type="number"
          value={recommendation.price}
          onChange={handleTextChange}
          placeholder="price..."
          required
        />
        <label htmlFor="rating">Gear's Rating:</label>
        <input
          id="rating"
          type="number"
          value={recommendation.rating}
          onChange={handleTextChange}
          placeholder="rating..."
          required
        />
        <label htmlFor="link">Gear's Link:</label>
        <input
          id="link"
          type="text"
          value={recommendation.link}
          onChange={handleTextChange}
          placeholder="link..."
          required
        />
        <label htmlFor="name">Gear's Name:</label>
        <input
          id="name"
          type="text"
          value={recommendation.name}
          onChange={handleTextChange}
          placeholder="name..."
          required
        />
        <label htmlFor="is_user_submitted">Gear's Submit:</label>
        <input
          id="is_user_submitted"
          type="checkbox"
          value={recommendation.is_user_submitted}
          onChange={handleCheckboxChange}
          placeholder="user..."
        />
        <div>
          <input type="submit" />
          <Link to="/recommended">
            <button>Go Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

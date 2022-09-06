import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function RecEditForm() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [recommendation, setRec] = useState({
    name: "",
    price: "",
    rating: "",
    is_user_submitted: "",
    is_expensive: "",
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
      .then((response) => setRec(response.data))
      .catch((error) => console.error(error));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setRec({ ...recommendation, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRec(recommendation);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Gear's Name:</label>
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

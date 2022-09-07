import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const RecNewForm = () => {
  const navigate = useNavigate();

  const [recommendation, setRecommendation] = useState({
    name: "",
    price: "",
    rating: "",
    is_user_submitted: false,
    is_expensive: "",
    image: "",
    link: "",
  });

  const addNewRec = (recommendation) => {
    axios
      .post(`${API}/recommended`, recommendation)
      .then(() => {
        navigate("/recommended");
      })
      .catch((err) => console.error(err));
  };

  const handleTextChange = (event) => {
    setRecommendation({
      ...recommendation,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewRec(recommendation);
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
          onChange={handleTextChange}
          placeholder="https://..."
          required
        />
        <label htmlFor="price">Gear's Price:</label>
        <input
          id="price"
          type="number"
          onChange={handleTextChange}
          placeholder="price..."
          required
        />
        <label htmlFor="rating">Gear's Rating:</label>
        <input
          id="rating"
          type="number"
          onChange={handleTextChange}
          placeholder="rating..."
          required
        />
        <label htmlFor="link">Gear's Link:</label>
        <input
          id="link"
          type="text"
          onChange={handleTextChange}
          placeholder="link..."
          required
        />
        <label htmlFor="name">Gear's Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleTextChange}
          placeholder="name..."
          required
        />
        <label htmlFor="is_user_submitted">Gear's Submit:</label>
        <input
          id="is_user_submitted"
          type="checkbox"
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
};

export default RecNewForm;

const db = require("../db/dbConfig");

// GET ALL RECS
const getAllRecommendations = async () => {
  try {
    const allRecommendations = await db.any("SELECT * FROM recs");
    return allRecommendations;
  } catch (error) {
    return error.message;
  }
};

//GET ONE REC
const getOneRecommendation = async (id) => {
  try {
    const oneRecommendation = await db.one(
      "SELECT * FROM recs WHERE id = $1",
      id
    );
    return oneRecommendation;
  } catch (error) {
    return error.message;
  }
};

// CREATE A NEW REOMMENDATION
const createRecommendation = async (recommendation) => {
  try {
    const newRecommendation = await db.one(
      "INSERT INTO recs (name, price, rating, is_user_submitted, is_expensive, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        recommendation.name,
        recommendation.price,
        recommendation.rating,
        recommendation.is_user_submitted,
        recommendation.is_expensive,
      ]
    );
    return newRecommendation;
  } catch (error) {
    error.message;
  }
};

// UPDATE A REC BY ID
const updateRecommendation = async (id, recommendation) => {
  try {
    const updatedRecommendation = await db.one(
      "UPDATE recs SET name = $1, price = $2, rating = $3, is_user_submitted = $4, is_expensive = $5, image = $6 WHERE id = $7 RETURNING *",
      [
        recommendation.name,
        recommendation.price,
        recommendation.rating,
        recommendation.is_user_submitted,
        recommendation.is_expensive,
        id,
      ]
    );
    return updatedRecommendation;
  } catch (error) {
    error.message;
  }
};

//DELETE A REC BY ID
const deleteRecommendation = async (id) => {
  try {
    const deletedRecommendation = await db.one(
      "DELETE FROM recs WHERE id = $1 RETURNING *",
      id
    );
    return deletedRecommendation;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllRecommendations,
  getOneRecommendation,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
};

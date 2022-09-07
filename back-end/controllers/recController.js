// DEPENDENCIES
const express = require("express");
const recommended = express.Router();

const db = require("../db/dbConfig");

// IMPORT ALL THE HELPER FUNCTIONS HANDLING CRUD OPERATIONS
const {
  getAllRecommendations,
  getOneRecommendation,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
} = require("../queries/guide");

// Import Confirm Price Func to use in post Operations
const confirmPrice = require("../confirmPrice");
const {
  capitalizeRecName,
  changeImageUrl,
} = require("../validation/checkRecommendation");
//

//INDEX ROUTE
recommended.get("/", async (req, res) => {
  const allRecommendations = await getAllRecommendations();
  if (allRecommendations) {
    res.status(200).json({ success: true, payload: allRecommendations });
  } else {
    res
      .status(404)
      .json({ success: false, payload: "Error! No recommendations found!" });
  }
});

// GET ONE REC BY ID
recommended.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneRecommendation = await getOneRecommendation(id);
  if (oneRecommendation.id) {
    res.status(200).json({ success: true, payload: oneRecommendation });
  } else {
    res.status(404).json({
      success: false,
      payload: `A recommendation with id number ${id} is not found!`,
    });
  }
});

//CREATE ROUTE USING POST METHOD TO CREATE A NEW RECOMMENDATION
recommended.post("/", async (req, res) => {
  const { body } = req;
  const aNewRecommendation = body;
  body.is_expensive = confirmPrice(body);
  const createdRecommendation = await createRecommendation(aNewRecommendation);
  if (createRecommendation) {
    res.status(200).json({ success: true, payload: createdRecommendation });
  } else {
    res.status(404).json({
      success: false,
      error: "A new recommendation can not be added!",
    });
  }
});

//UPDATE ROUTE USING PUT METHOD
recommended.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    body.is_expensive = confirmPrice(body);
    const updatedRecommendation = await updateRecommendation(id, body);
    res.status(200).json({ success: true, payload: updatedRecommendation });
  } catch (error) {
    console.log(error);
  }
});

//DELETE A REC BY ITS ID
recommended.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRecommendation = await deleteRecommendation(id);
  if (deletedRecommendation) {
    if (deletedRecommendation.id) {
      res.status(200).json({ success: true, payload: deletedRecommendation });
    } else {
      res.status(404).json({ success: false, payload: deletedRecommendation });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: `A recommendation with id number ${id} can not be deleted! Please try again.`,
    });
  }
});

module.exports = recommended;

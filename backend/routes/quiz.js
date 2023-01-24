const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Quiz = require("../models/Quiz");
const { body, validationResult } = require("express-validator");

// ROUTE 1 : Get All the QUIZ using : GET "/api/quiz/getuser" .Login required
router.get("/fetchallquiz", fetchuser, async (req, res) => {
    try {
      const quizs = await Quiz.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });


module.exports = router;

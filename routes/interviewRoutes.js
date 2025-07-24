const express = require("express");
const router = express.Router();
const {
  startInterview,
  conductInterview

} = require("../controllers/interviewController");
const ensureAuthenticated=require("../middleware/authMiddleware");


router.route("/start").post(startInterview)
router.route("/conduct").post(conductInterview)

module.exports = router;

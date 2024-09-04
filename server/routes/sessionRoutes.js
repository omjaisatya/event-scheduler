const express = require("express");
const router = express.Router();
const {
  createSession,
  getSessions,
} = require("../controllers/sessionController");

router.post("/create", createSession);
router.get("/user/:userId", getSessions);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createSession,
  getSessions,
  updateSession,
  cancelSession,
} = require("../controllers/sessionController");

router.post("/create", createSession);
router.get("/user/:userId", getSessions);
router.put("/update", updateSession);
router.delete("/cancel/:sessionId", cancelSession);

module.exports = router;

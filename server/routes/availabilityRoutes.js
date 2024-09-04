const express = require("express");
const {
  addAvailability,
  updateAvailability,
  deleteAvailability,
} = require("../controllers/availabilityController");
const router = express.Router();

router.post("/add", addAvailability);
router.put("/update", updateAvailability);
router.delete("/delete/:userId", deleteAvailability);

module.exports = router;

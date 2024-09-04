const express = require("express");
const router = express.Router();
const { register, login, updatePreferences } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.put("/preferences", updatePreferences);

module.exports = router;

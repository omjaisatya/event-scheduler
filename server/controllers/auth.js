const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/Keys");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      res.status(400);
      throw new Error("User already existed");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ code: 201, status: true, message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    // res.json({ token });

    res.status(200).json({
      code: 200,
      status: true,
      message: "User signin successful",
      data: { token, user },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePreferences = async (req, res) => {
  try {
    const { userId, preferences } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { notificationPreferences: preferences },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Preferences updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, updatePreferences };

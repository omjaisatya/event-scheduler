const Availability = require("../models/availability");

const addAvailability = async (req, res) => {
  try {
    const { userId, availability } = req.body;
    const newAvailability = new Availability({ user: userId, availability });
    await newAvailability.save();
    res.status(201).json({ message: "Availability added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAvailability = async (req, res) => {
  try {
    const { userId, availability } = req.body;
    await Availability.findOneAndUpdate({ user: userId }, { availability });
    res.json({ message: "Availability updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAvailability = async (req, res) => {
  try {
    const { userId } = req.params;
    await Availability.deleteOne({ user: userId });
    res.json({ message: "Availability deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addAvailability, updateAvailability, deleteAvailability };

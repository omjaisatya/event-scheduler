const Availability = require("../models/availability");

const addAvailability = async (req, res) => {
  try {
    const { userId, availability } = req.body;

    if (!userId || !availability || !Array.isArray(availability)) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    for (const dayAvailability of availability) {
      const { day, slots } = dayAvailability;

      if (!day || !slots || !Array.isArray(slots)) {
        return res.status(400).json({
          message:
            "Each availability entry must have a valid day and slots array.",
        });
      }

      for (const slot of slots) {
        const { start, end } = slot;
        if (!start || !end) {
          return res.status(400).json({
            message: "Each slot must have a valid start and end time.",
          });
        }

        const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeFormat.test(start) || !timeFormat.test(end)) {
          return res.status(400).json({
            message: `Invalid time format in slot: start="${start}", end="${end}". Use "HH:MM" format.`,
          });
        }
      }
    }

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

const Session = require("../models/session");

const createSession = async (req, res) => {
  try {
    const { userId, start, end, duration, attendees } = req.body;
    const newSession = new Session({
      user: userId,
      start,
      end,
      duration,
      attendees,
    });
    await newSession.save();
    res.status(201).json({ message: "Session created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.params.userId });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSession, getSessions };

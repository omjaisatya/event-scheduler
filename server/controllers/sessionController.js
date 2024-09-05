const Session = require("../models/session");
const Availability = require("../models/availability");
const nodemailer = require("nodemailer");
const { senderEmail, emailPassword } = require("../config/Keys");

const sendNotification = async (attendees, subject, text) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    // service: "gmail",
    auth: {
      user: senderEmail,
      pass: emailPassword,
    },
  });

  for (const attendee of attendees) {
    await transporter.sendMail({
      from: senderEmail,
      to: attendee.email,
      subject,
      text,
    });
  }
};

const isSlotAvailable = async (userId, start, end) => {
  const availability = await Availability.findOne({ user: userId });
  // if (!availability) return false;

  if (!availability) {
    console.log("No availability found for user:", userId);
    return false;
  }

  return availability.availability.some((dayAvailability) => {
    return dayAvailability.slots.some((slot) => {
      const slotStart = new Date(
        `${new Date(start).toDateString()} ${slot.start}`
      );
      const slotEnd = new Date(`${new Date(start).toDateString()} ${slot.end}`);

      console.log("slot End", slotEnd);
      console.log("slot  Start", slotStart);

      return start >= slotStart && end <= slotEnd;
    });
  });
};

const createSession = async (req, res) => {
  try {
    const { userId, start, end, duration, attendees } = req.body;

    const conflictingSessions = await Session.find({
      user: userId,
      $or: [{ start: { $lt: end }, end: { $gt: start } }],
    });

    if (conflictingSessions.length > 0) {
      return res
        .status(400)
        .json({ message: "Session conflicts with existing sessions" });
    }

    const available = await isSlotAvailable(userId, start, end);
    if (!available) {
      return res
        .status(400)
        .json({ message: "Selected slot is not available" });
    }

    const newSession = new Session({
      user: userId,
      start,
      end,
      duration,
      attendees,
    });
    await newSession.save();
    await sendNotification(
      attendees,
      "New Session Scheduled",
      `Your session is scheduled from ${start} to ${end}.`
    );

    res.status(201).json({ message: "Session created" });
  } catch (err) {
    console.error("Error creating session:", err);
    // res.status(500).json({ error: err.message });
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

const updateSession = async (req, res) => {
  try {
    const { sessionId, newStart, newEnd, newDuration } = req.body;

    const conflictingSessions = await Session.find({
      _id: { $ne: sessionId },
      $or: [{ start: { $lt: newEnd }, end: { $gt: newStart } }],
    });

    if (conflictingSessions.length > 0) {
      return res
        .status(400)
        .json({ message: "Rescheduling conflicts with existing sessions" });
    }

    const updatedSession = await Session.findByIdAndUpdate(
      sessionId,
      {
        start: newStart,
        end: newEnd,
        duration: newDuration,
      },
      { new: true }
    );

    if (!updatedSession) {
      return res.status(404).json({ message: "Session not found" });
    }

    res.json({ message: "Session updated", session: updatedSession });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const cancelSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const result = await Session.findByIdAndDelete(sessionId);
    if (!result) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.json({ message: "Session cancelled" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSession, getSessions, updateSession, cancelSession };

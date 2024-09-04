const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  start: { type: Date, require: true },
  end: { type: Date, require: true },
  duration: { type: Number, required: true },
  attendees: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Session", sessionSchema);

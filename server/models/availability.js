const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  availability: [
    {
      day: { type: String, required: true },
      slots: [
        {
          start: { type: String, required: true },
          end: { type: String, required: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Availabilty", availabilitySchema);

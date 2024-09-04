const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  availability: [
    {
      day: { type: string, required: true },
      slots: [
        {
          start: { type: string, required: true },
          end: { type: string, required: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Availabilty", availabilitySchema);

const mongoose = require("mongoose");
const connectionUrl = require("../config/Keys");

const connectMongodb = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Database connect successfully");
  } catch (error) {
    console.log(error.message);
    // process.exit(1);
  }
};

module.exports = connectMongodb;

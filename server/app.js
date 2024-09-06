const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const connectMongodb = require("./db/mongodb");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

connectMongodb();

const userRoutes = require("./routes/userRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const sessionRoutes = require("./routes/sessionRoutes");

app.use("/users", userRoutes);
app.use("/availability", availabilityRoutes);
app.use("/sessions", sessionRoutes);

module.exports = app;

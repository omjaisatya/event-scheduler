const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectMongodb = require("./db/mongodb");

const app = express();

connectMongodb();

module.exports = app;

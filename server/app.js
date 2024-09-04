const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectMongodb = require("./db/mongodb");

const app = express();

console.log(process.env.CONNECTION_URL);

connectMongodb();

module.exports = app;

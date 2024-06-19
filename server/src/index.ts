import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import http from "http";
import mongoose from "mongoose";

dotenv.config();

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

if (!MONGO_CONNECTION_STRING) {
  console.error("MONGO_CONNECTION_STRING is not set");
  process.exit(1);
}

const app = express();

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Error connecting to database: ", err));

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

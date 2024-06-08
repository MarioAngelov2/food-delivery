import bodyParser from "body-parser";
import express from "express";
import http from "http";

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

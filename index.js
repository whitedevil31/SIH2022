const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config({ path: "./.env" });
const connectDB = require("./src/db");
connectDB();

app.use(express.json())
app.use(cors());
port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is up on port " + port);
});

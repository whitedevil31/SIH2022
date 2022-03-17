const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config({ path: "./.env" });
const connectDB = require("./src/db");
const userRoute = require("./src/routes/userRoutes");
connectDB();

app.use(express.json())
app.use(cors());
app.use('/user',userRoute);
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is up on port " + port);
});

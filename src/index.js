const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT;
const mongouri = process.env.MONGOURI;

// middleware
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

//mongodb connection
mongoose
  .connect(mongouri)
  .then(() => console.log("Connected to mongodb atlas"))
  .catch((error) => console.log(error));

// app listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

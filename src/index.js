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

const router = express.Router();

router.get("/", (req, res) => {
  const menu = {
    users: `http://localhost:3000/api/users`,
  };
  res.send({ message: "Menu", body: menu });
});
app.use("/", router);

//mongodb connection
mongoose
  .connect(mongouri)
  .then(() => console.log("Connected to mongodb atlas"))
  .catch((error) => console.log(error));

// app listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

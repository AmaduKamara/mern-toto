const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mondodb connected successfully"))
  .catch((error) => console.log("Error connecting to mongodb,", error.message));

app.listen(port, () => {
  console.log(`App running on port: ${port}.`);
});

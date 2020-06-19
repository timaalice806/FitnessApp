const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello pretty World");
});

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("database is connected");
});

const connectDB = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db has been connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`application running on port ${Port}`);
});

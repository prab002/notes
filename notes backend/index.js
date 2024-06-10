const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");

const port = 9000;
const uri = "mongodb+srv://1234:1234@cluster0.kmbijch.mongodb.net/notes";
const app = express();
app.use(express.json());

// data base connection
mongoose.connect(uri);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

//backed running connection 
app.listen(port, () => {
  console.log(`backend is running on port ${port}`);
});

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//dotenv
const dotenv = require("dotenv");
dotenv.config();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send("<h1>POS BACKEND</h1>");
});

//PORT
const PORT = process.env.PORT || 2000;

//Connect MongoDB
const connectDB = require("./config/config");
connectDB();

//listen
app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`);
});

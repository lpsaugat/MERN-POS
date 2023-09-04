const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();
//dotenv
const dotenv = require("dotenv");
dotenv.config();

//Middlewares
app.use(multer);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(errorHandlerMiddleware);

//Routes
// const itemRoute = require("./routes/itemRoute");
// app.use("/api", itemRoute);

app.get("/items", (req, res) => {
  console.log("HEEHHE");
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

const mongoose = require("mongoose");

//Connect DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

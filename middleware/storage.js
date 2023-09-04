const multer = require("multer");
const path = require("path");

// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/image"); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Generate a unique filename
  },
});

// Create a multer instance with the defined storage
const upload = multer({ storage });

module.exports = upload;

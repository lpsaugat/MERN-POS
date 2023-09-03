const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.cookies["Token"]) {
    const authHeader = req.cookies["Token"];
    if (authHeader) {
      const token = authHeader;
      jwt.verify(token.value, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(403).json("Token is not validd!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated");
    }
  } else {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated");
    }
  }
};

module.exports = { verifyToken };

import jwt from "jsonwebtoken";

const verifyPattern = (req, res, next) => {
  if (req.pattern.id === req.params.id) {
    next();
  } else {
    return res.status(406).send("You are not logged in!");
  }
};

export const verifySessionToken = (req, res, next) => {
  const token = req.cookies.session_token;

  if (!token) {
    return res.status(401).send("Not authorized!");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, pattern) => {
    if (err) {
      return res.status(404).send("Token is not valid!");
    }
    req.pattern = pattern;

    verifyPattern(req, res, next);
  });
};

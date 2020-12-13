const jwt = require('jsonwebtoken');

module.exports = async function verifyJWT(req, res, next) {
  const token = req.headers.authentication;
  const [, jwtToken] = token.split(' ');

  const decoded = await jwt.verify(jwtToken, process.env.SECRET);

  res.userId = decoded._id;

  next();
};

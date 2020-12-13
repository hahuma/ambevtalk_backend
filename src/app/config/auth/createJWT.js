const jwt = require('jsonwebtoken');

module.exports = function createJWT(payload) {
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: '5h',
  });

  return token;
};

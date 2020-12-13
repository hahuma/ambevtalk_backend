const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createJWT = require('../config/auth/createJWT');

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!(await bcrypt.compare(password, user.email))) {
      return res.status(400).json({ message: 'Incorrect Password.' });
    }

    return res.json({ user, token: createJWT(user) });
  },
};

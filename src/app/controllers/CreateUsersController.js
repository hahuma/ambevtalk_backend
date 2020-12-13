const User = require('../models/User');

module.exports = {
  async create(req, res) {
    try {
      const { name, lastName, email, whatsapp } = req.body;

      if (await User.findOne(email)) {
        return res.status(400).json({ message: 'User already exists!' });
      }
      const user = await User.create({
        name,
        lastName,
        email,
        whatsapp,
      });

      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};

const Idea = require('../models/Idea');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { id } = req.userId;

    const userEmail = await User.findOne({
      _id: id,
    }).select('email');

    const lists = await Idea.find({ user_email: userEmail }).populate(
      'comments'
    );

    return res.json(lists);
  },
};

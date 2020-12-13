const Comment = require('../models/Comment');

module.exports = {
  async create(req, res) {
    const { sender_name, comment } = req.body;
    const { id } = req.params;

    const data = await Comment.create({ sender_name, comment, ideaId: id });

    return res.status(201).json(data);
  },
};

const uuid = require('uuid');
const Idea = require('../models/Idea');

const User = require('../models/User');
const createPDF = require('../../services/createPDF');
const createJWT = require('../config/auth/createJWT');

module.exports = {
  async create(req, res) {
    const { name, link_url } = req.body;
    const { userId } = req;
    const pdf_name = uuid.v4();

    const user_email = await User.findById(userId).select('email');

    const idea = await Idea.create({ name, link_url, pdf_name, user_email });

    await createPDF(idea);

    return res.statu(201).json({ idea, token: createJWT(idea) });
  },
};

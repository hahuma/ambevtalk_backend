const { Schema, model } = require('mongoose');

const IdeasSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link_url: {
      type: String,
      required: true,
    },
    pdf_name: {
      type: String,
      required: true,
      unique: true,
    },
    user_email: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'Users',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Ideas', IdeasSchema);

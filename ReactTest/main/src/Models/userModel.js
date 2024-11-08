const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    //createdAt
    //updatedAt
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('user', accountSchema);
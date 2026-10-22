const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 50,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: { values: ['customer', 'admin'] },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', userSchema);

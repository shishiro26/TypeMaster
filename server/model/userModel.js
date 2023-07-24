const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true],
    },
    email: {
      type: String,
      required: [true],
    },

    number: {
      type: Number,
      required: [true],
    },
    password: {
      type: String,
      required: [true],
    },
    DOB: {
      type: Date,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

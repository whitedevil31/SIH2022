const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    bio: { type: String, required: true },

    age: { type: Number, required: true, trime: true },
    gender: { type: String, required: true, trime: true, lowercase: true },

    tokens: [{ token: { type: String, required: true } }],
    pictures: { type: Buffer },
  },
  { timestamps: true }
);






const Users = mongoose.model("Users", userSchema);
module.exports = Users;

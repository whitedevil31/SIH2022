const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: String,
    },
  },
  { timestamps: true },
)

const Users = mongoose.model('Users', userSchema)
module.exports = Users

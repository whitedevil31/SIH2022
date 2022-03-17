const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
    },
    userPhoneNumber: {
      type: String,
    },
  },
  { timestamps: true },
)

const Otp = mongoose.model('Otp', otpSchema)
module.exports = Otp

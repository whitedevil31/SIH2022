const mongoose = require('mongoose')

const dummyAadharSchema = new mongoose.Schema(
  {
    aadharNumber: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
  },
  { timestamps: true },
)

const DummyAadhar = mongoose.model('DummyAadhar', dummyAadharSchema)
module.exports = DummyAadhar

const mongoose = require('mongoose')

const appsSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    name: { type: String },
    secretKey: { type: String },
    //encrypted
  },
  { timestamps: true },
)

const Apps = mongoose.model('Apps', appsSchema)
module.exports = Apps

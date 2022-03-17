const express = require('express')
const User = require('../models/userSchema')
const router = express.Router()
const bcrypt = require('bcryptjs')
const Otp = require('../models/otpSchema')
const { create } = require('../models/otpSchema')
router.post('/register', async (req, res) => {
  try {
    const mobileNumber = req.body.mobileNumber
    const saltRounds = 12
    const salt = await bcrypt.genSalt(saltRounds)
    const mobileHash = await bcrypt.hash(mobileNumber, salt)
    const registerUser = new User({ mobileNumber: mobileHash })
    await registerUser.save()
    res.status(200).json({ message: 'User registered' })
  } catch (err) {
    console.log(err)
    res.json(400).json('Something went wrong ')
  }
})

router.post('/getOtp', async (req, res) => {
  try {
    const mobileNumber = req.body.mobileNumber
    const saltRounds = 12
    const salt = await bcrypt.genSalt(saltRounds)
    const mobileHash = await bcrypt.hash(mobileNumber, salt)
    const generateOtp = Math.floor(100000 + Math.random() * 900000)
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSid, authToken)
    const to = '+91' + mobileNumber
    console.log(to)
    const sendSms = await client.messages.create({
      body: `You can use this OTP to register in our app: ${generateOtp}`,
      from: '+17207408388',
      to: to,
    })
    console.log(sendSms)
    if (sendSms.sid) {
      const otpRecord = new Otp({
        userPhoneNumber: mobileHash,
        otp: generateOtp,
      })
      await otpRecord.save()
      res.status(200).json({ message: generateOtp })
    }
  } catch (err) {
    console.log(err)
    throw err
  }
})

router.get('/verifyOtp', async (req, res) => {
  try {
    const mobileNumber = req.body.mobileNumber
    const userOtp = req.body.userOtp
    const saltRounds = 12
    const salt = await bcrypt.genSalt(saltRounds)
    const mobileHash = await bcrypt.hash(mobileNumber, salt)
    console.log(mobileHash)
    const findOtp = await Otp.findOne({
      otp: userOtp,
    })
    if (findOtp != null) {
      if (await bcrypt.compare(mobileNumber, findOtp.userPhoneNumber)) {
        await Otp.deleteOne({ _id: findOtp._id })
        const createUser = new User({ mobileNumber: mobileHash })
        await createUser.save()
        return res.status(200).json({ message: 'Otp verified' })
      } else {
        return res.status(409).json({ message: 'Incorrect OTP' })
      }
    } else {
      return res.status(409).json({ message: 'Incorrect OTP' })
    }

    // if (findOtp!=null) {
    //   await Otp.deleteOne({ _id: findOtp._id })
    //   const createUser = new User({ mobileNumber: mobileHash })
    //   await createUser.save()
    //   return res.status(200).json({ message: 'Otp verified' })
    // } else {
    //   return res.status(409).json({ message: 'Incorrect Otp ' })
    // }
  } catch (err) {
    console.log(err)
    throw err
  }
})

module.exports = router

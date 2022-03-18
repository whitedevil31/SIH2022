const express = require('express')
const Aadhar = require('../models/aadharSchema')
const router = express.Router()

router.post('/add', async (req, res) => {
  try {
    console.log(req.body.aadharNumber)
    const newData = new Aadhar({
      aadharNumber: req.body.aadharNumber,
      mobileNumber: req.body.mobileNumber,
    })
    await newData.save()
    return res.status(200).json({ message: 'Added' })
  } catch (err) {
    console.log(err)
    res.json(400).json('Something went wrong ')
  }
})
router.post('/get', async (req, res) => {
  try {
    const data = await Aadhar.findOne({ aadharNumber: req.body.aadharNumber })
    return res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.json(400).json('Something went wrong ')
  }
})
module.exports = router

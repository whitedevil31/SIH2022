const express = require('express')
const Aadhar = require('../models/adharSchema')
const router = express.Router()
router.post('/get', async (req, res) => {
  try {
    console.log(req.body.aadharNumber)
    const findData = await Aadhar.findOne({
      aadharNumber: req.body.aadharNumber,
    })
    console.log(findData)
    if (findData) res.status(200).json({ message: findData.mobileNumber })
    else res.status(404).json({ message: 'Data not found ' })
  } catch (err) {
    console.log(err)
    res.json(400).json('Something went wrong ')
  }
})
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
module.exports = router

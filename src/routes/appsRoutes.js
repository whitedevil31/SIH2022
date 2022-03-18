const express = require('express')
const App = require('../models/appsSchema')
const router = express.Router()
const crypto = require('crypto')
const Cryptr = require('cryptr')
router.post('/add', async (req, res) => {
  try {
    const newApp = new App({
      owner: req.body.userId,
      name: req.body.appName,
      secretKey: req.body.secretKey,
    })
    await newApp.save()
    res.status(200).json({ message: 'App added successfully !' })
  } catch (err) {
    console.log(err)
    res.json(400).json('Something went wrong ')
  }
})

router.post('/encrypt', (req, res) => {
  const cryptr = new Cryptr('thisissecret')
  return res.status(200).json({ message: cryptr.encrypt(req.body.key) })
})
router.post('/decrypt', (req, res) => {
  const cryptr = new Cryptr('thisissecret')
  return res.status(200).json({ message: cryptr.decrypt(req.body.key) })
})
module.exports = router

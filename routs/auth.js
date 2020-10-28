const router = require('express').Router()
const User = require('../model/User')
const { registerValidation } = require('../validation')

router.get('/', async (req, res) => {
  //Data validation before saving the user
  res.send('Sending response from auth rout')
})

router.post('/register', async (req, res, next) => {
  try {
    const { error, value } = await registerValidation(req.body)
    console.log('Your user was created: ')
    res.send('Your user was created: ')
  } catch (err) {
    console.log(err.details[0].message)
    return res.status(400).send(err.details[0].message)
  }
})

module.exports = router

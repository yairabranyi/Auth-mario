const router = require('express').Router()
const User = require('../model/User')

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try {
    const savedUser = await user.save()
    res.status(200).send(savedUser);
    // res.send('The saved user is: ', savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
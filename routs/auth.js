const router = require('express').Router()
const User = require('../model/User')
const { registerValidation } = require('../validation')

router.get('/', async (req, res) => {
  //Data validation before saving the user
  res.send('Sending response from auth rout')
})

router.post('/register', async (req, res, next) => {

    const { error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //create a new Userobject by the User schema
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

// try {
//   const savedUser = await user.save()
//   res.send(savedUser)
// } catch (err) {
//   res.status(400).send(err)
// }

//     try {
//       const savedUser = await user.save()
//     res.json(savedUser)
//     } catch (err) {
//       res.json({ message: err })
//     }
    console.log('Your user was created, The Value is:', req.body)
    res.send(req.body)
 
    // console.log(err.details[0].message)
    //res.status(400).send(err.details[0].message)
  
})

module.exports = router

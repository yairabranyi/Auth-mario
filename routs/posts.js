const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    console.log("The user Id is: ", req.user._id)
//if there is a valid Token the user is returned
res.send(req.user)
// We can find a user based on the given Token:
// User.findByOne({_id: req.user})

// Simulating hard coded User data
//   res.json({
//     posts: {
//       title: 'my first post',
//       description: 'random data you shouldnt access'
//     }
//   })
})

module.exports = router

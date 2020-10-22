const router = require('express').Router()
const User = require('../model/User')


//Validation
const Joi = require('joi')

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

router.get('/', async (req, res) => {
  res.send('Sending response from auth rout')

})




router.post('/register', async (req, res, next) => {
     const { body } = req;
    console.log("This is a mesage from Register POST");
    console.log("body is: ", body);
//Data validation befor we save a user:
 
try {
    const value = await schema.validateAsync(body);
 res.send('Your user was created')

}
catch (err) {
     res.send(err.details[0].message)

 } 


})


module.exports = router

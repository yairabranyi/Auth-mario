const Joi = require('joi')

//Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
  })
  console.log('Running Validation')
  return schema.validateAsync(data)
}

module.exports.registerValidation = registerValidation

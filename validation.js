const Joi = require('joi')

//Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
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
  return schema.validate(data)
}

//Log in Validation
const logInValidation = data => {
  const schemaLogIn = Joi.object({
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
  })
  console.log('Running Log in Validation')
  return schemaLogIn.validate(data)
}

module.exports.logInValidation = logInValidation
module.exports.registerValidation = registerValidation

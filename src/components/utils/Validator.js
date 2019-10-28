import Joi from '@hapi/joi';


export const validateLogin = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required().error(new Error('Email is a required field!')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{12,30}$/).required().error(new Error('Password field is required and must be at least 8 characters long!'))
});
const { error } = Joi.validate(data, schema);
console.log(error.message);
 if(error) {
   return error.message;
 } else {
   return false;
 }
};



export const validateRegister = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required().error(new Error('Email is a required field!')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{12,30}$/).required().error(new Error('Password field is required and must be at least 8 characters long')),
    confirm_password: Joi.ref('password')
});
const { error } = Joi.validate(data, schema);
 if(error) {
   return error.message;
 } else {
   return false;
 }
};
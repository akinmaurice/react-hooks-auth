import Joi from '@hapi/joi';


export const validateLogin = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{12,30}$/).required()
});
const { error } = Joi.validate(data, schema);
 if(error) {
   return error.details[0].message;
 } else {
   return false;
 }
};



export const validateRegister = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{12,30}$/).required(),
    confirm_password: Joi.ref('password')
});
const { error } = Joi.validate(data, schema);
 if(error) {
   return error.details[0].message;
 } else {
   return false;
 }
};
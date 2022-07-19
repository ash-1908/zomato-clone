import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(2).max(30),
    email: joi.string().email().max(40),
    password: joi.string().required().min(5).max(40),
    phoneNumber: joi.string().regex(/^[7-9]{1}[0-9]{9}/)
  });

  return Schema.validateAsync(userData);
};


export const ValidateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required().max(40),
    password: joi.string().required().min(5).max(40),
  });

  return Schema.validateAsync(userData);
};
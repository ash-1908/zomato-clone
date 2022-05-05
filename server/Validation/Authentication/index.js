import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(2).max(30),
    email: joi.string().email().max(40),
    password: joi.string().min(5).max(40),
    address: joi
      .array()
      .items(
        joi.object({ details: joi.string().max(100), for: joi.string().max(5) })
      ),
    phoneNumber: joi.number().min(7).max(10),
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
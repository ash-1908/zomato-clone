import joi from "joi";

export const ValidateUserId = (id) => {
    const Schema = new joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(id);
}

export const ValidateNewOrder = (newOrder) => {
  const Schema = new joi.object({
    user: joi.string().required(),
    orderDetails: joi.array().items(
      joi.object({
        food: joi.string().required(),
        quantity: joi.number().precision(0).required().max(15),
        payMode: joi.string().required(),
        status: joi.string().required(),
        paymentDetails: joi.object({
          itemTotal: joi.number().precision(2).required(),
          promo: joi.string(),
          tax: joi.number().required(),
        }),
      })
    ),
    orderRating: joi.number().required().min(1).max(5),
  });

  return Schema.validateAsync(newOrder);
};
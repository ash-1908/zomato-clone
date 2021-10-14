import joi from "joi";

export const ValidateRestaurantObject = (restObj) => {
    const Schema = new joi.object({
      name: joi.string().required(),
      city: joi.string().required(),
      address: joi.string().required(),
      mapLocation: joi.string().required(),
      cuisine: joi.array().items(joi.string()),
      restaurantTimings: joi.string().required(),
      contactNumber: joi.number().precision(0).min(7).max(10),
      website: joi.string(),
      popularDishes: joi.array().items(joi.string()),
      averageCost: joi.number().precision(0),
      amenties: joi.array().items(joi.string()),
      menuImages: joi.string().required(),
      menu: joi.string().required(),
      reviews: joi.array().items(joi.string()),
      photos: joi.string().required(),
    });

    return Schema.validateAsync(restObj);
};

export const ValidateRestaurantCity = (city) => {
    const Schema = new joi.object({
        city: joi.string().required().min(3).max(25)
    });

    return Schema.validateAsync(city);
}

export const ValidateRestaurantId = (id) => {
  const Schema = new joi.object({
    _id: joi.string().required()
  });

  return Schema.validateAsync(id);
};

export const ValidateRestaurantSearchString = (str) => {
  const Schema = new joi.object({
    searchString: joi.string().required().min(1).max(30),
  });

  return Schema.validateAsync(str);
};

import Mongoose from "mongoose";

export default async () => {
  return Mongoose.connect(process.env.MONGODB, {
      
  });
};

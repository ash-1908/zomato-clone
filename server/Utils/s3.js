import AWS from "aws-sdk";
require("dotenv").config();

//AWS S3 bucket config
const bucket = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_ACCESS_SECRET,
  region: "ap-south-1",
});

//S3 upload function
export const s3Upload = (options) => {
        return new Promise((resolve, reject) => {
          bucket.upload(options, (error, data) => {
            if (error) return reject(error);

            return resolve(data);
          });
        });
      };
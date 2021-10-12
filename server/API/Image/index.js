//libraries
import Express, { response } from "express";
import AWS, { IdentityStore } from "aws-sdk";
import Multer from "multer";

require("dotenv").config();

//database model
import {ImageModel} from "../../Database/allModels";

//Utilities
import { s3Upload } from "../../Utils/s3";

//middleware
const Router = Express.Router();

//Multer config
const storage = Multer.memoryStorage();
const upload = Multer({storage});

/* 
Route           /
Description     Uploading image to s3 bucket, then saving the file to mongoDB
Params          None
Access          Public   
Method          POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
      const file = req.file;
      //S3 bucket options
      const bucketOptions = {
        Bucket: "projectzomatoclone",
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      };
      
      //call upload function
      const uploadImage = await s3Upload(bucketOptions);

      return res.json({ uploadImage });
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;
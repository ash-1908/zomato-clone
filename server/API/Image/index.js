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
Description     Get photos of id
Params          _id
Access          Public   
Method          GET
*/
Router.get("/:_id", async(req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);
    
    return res.status(200).json({image});

  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


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

      let imageDB;

      if(req.body._id) {
        const obj = {
          location: uploadImage.Location
        }
        
        imageDB = await ImageModel.findByIdAndUpdate(
          req.body._id,
          {
            $push: {
              images: obj
            }
          },
          {
            new: true
          }
        );
        
        return res.json({imageDB});
      }

      imageDB = await ImageModel.create(
        {
          images: [{
            location: uploadImage.Location
          }]
        }
        );

      return res.json({ imageDB });

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;
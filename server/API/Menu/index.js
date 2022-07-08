import Express from "express";
import passport from "passport"

import {MenuModel, ImageModel} from "../../Database/allModels";

const Router = Express.Router();

import {ValidateRestaurantId} from "../../Validation/food";

/* 
Route           /
Description     Get menu based on id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const {_id} = req.params;

        const menus = await MenuModel.findById(_id);
        
        return res.json({menus});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /image
Description     Get menu image based on restaurant id
Params          _id
Access          Public
Method          GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        await ValidateRestaurantId(_id);
        
        const menuImage = await ImageModel.findOne(_id);
        
        return res.json({ menuImage });
        
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});



// @Route   POST /menu/new
// @des     add new menu
// @access  PUBLIC
Router.post("/new", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
  
      if (menuData._id) {
        const updateMenu = await MenuModel.findByIdAndUpdate(
          menuData._id,
          {
            $push: {
              menus: { $each: menuData.menus },
            },
          },
          { new: true }
        );
  
        return res.json({ menu: updateMenu });
      }
  
      const createNewMenu = await MenuModel.create(menuData);
  
      return res.json({ menu: createNewMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


  // @Route   POST menu/recommendation/new
// @des     add new recommendation
// @access  PUBLIC
Router.post("/recommendation/new", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            recommended: { $each: menuData.recommended },
          },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   PATCH /menu/update
  // @des     update new menu
  // @access  PUBLIC
  Router.patch("/update", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
      const updateMenu = await MenuModel.findOneAndUpdate(
        { _id: menuData._id, "menus._id": menuData.menu_id },
        {
          $set: {
            "menus.$.name": menuData.name,
          },
          $push: { "menus.$.items": { $each: menuData.items } },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /menu/delete/single
  // @des     deletes a single menu
  // @access  PUBLIC
  Router.delete("/delete/single", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $pull: { menus: { _id: menuData.menu_id } },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /menu/item/delete/single
  // @des     deletes a single menu
  // @access  PUBLIC
  Router.delete("/item/delete/single", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findOneAndUpdate(
        { _id: menuData._id, "menus._id": menuData.menuId },
        {
          $pull: { "menus.$.items": menuData.deleteItem },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE menu/recommendation/delete/single
  // @des     deletes a single menu
  // @access  PUBLIC
  Router.delete("/recommendation/delete/single", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $pull: { recommended: menuData.recommended_id },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;
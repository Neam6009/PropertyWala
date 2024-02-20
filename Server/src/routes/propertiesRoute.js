const express = require("express");
const propertyController = require("../controllers/properties");
const router = express.Router();

router.get("property-detail/:id", propertyController.propertyDetails);
router.get("/all", propertyController.getAllProperties);
router.get("/user/:id", propertyController.getPropertiesByUser);
router.get(
  "/show-properties/:type/:location?",
  propertyController.filteredProperties
);

router.get("/getWishlist/:uid",propertyController.getWishlistByID);
router.get("/checkWishlist/:uid/:pid",propertyController.checkWishlist);

router.post("/removeFromWishlist/:uid/:pid",propertyController.removePropertyFromWishlist);
router.post("/addToWishlist/:uid/:pid",propertyController.addPropertyToWishlist);
router.post("/remove/:id", propertyController.removeProperty);
router.post("/listProperty", propertyController.insertProperty);
module.exports = router;

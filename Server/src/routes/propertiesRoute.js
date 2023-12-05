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
router.post("/remove/:id", propertyController.removeProperty);
router.post("/listProperty", propertyController.insertProperty);
module.exports = router;

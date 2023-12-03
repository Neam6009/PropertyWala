const express = require("express");
const blogController = require("../controllers/blogs");
const router = express.Router();
router.get("/all", blogController.getAllBlogs);
router.post("/deleteBlog/:id", blogController.removeBlog);
router.get("/user/:id", blogController.getBlogBy_id);
module.exports = router;

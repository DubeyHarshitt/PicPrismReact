const express = require('express');
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken")
const { createPost, getAllPost, getMyPost, deletePost } = require("../Controllers/postController");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPost);
router.get("/post/myPosts", verifyToken, getMyPost);
router.delete("/post/delete/:id", verifyToken, deletePost);

module.exports = router; 
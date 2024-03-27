const express = require('express');
const ProtectUser = require('../middleware/ProtectRoute');
const { createPost, getPost, deletePost, likeUnlikePost, replyToPost, deleteReply,getFeedPost } = require('../controllers/PostController');

const router = express.Router();

router.get('/feed', ProtectUser, getFeedPost)
router.get('/:id', getPost)
router.post('/create', ProtectUser, createPost)
router.delete('/:id', ProtectUser, deletePost)
router.post('/like/:id', ProtectUser, likeUnlikePost)
router.post('/reply/:id', ProtectUser, replyToPost)
router.delete('/:postId/replies/:replyId', ProtectUser, deleteReply)

module.exports = router;
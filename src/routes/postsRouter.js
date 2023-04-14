const {Router} = require("express");

const {createPostsHandler} = require("../handlers/postsHandlers"); 
const postRouter = Router();

postRouter.post("/", createPostsHandler);

module.exports = postRouter;

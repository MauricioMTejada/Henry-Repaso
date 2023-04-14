const { Router } = require("express");

const {
  getDetailHandler,
  getUsersHandler,
  createUserHandler,
} = require("../handlers/usersHandlers.js");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getDetailHandler);

usersRouter.post("/", createUserHandler);

module.exports = usersRouter;

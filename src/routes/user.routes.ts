import express from "express";
import userController from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/users", userController.getAll);
// roomRouter.get("/users/:id", userController.getById);
userRouter.post("/users", userController.create);
userRouter.patch("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.suppr);

export default userRouter;
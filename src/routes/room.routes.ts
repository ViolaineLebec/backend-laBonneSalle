import express from "express";
import roomController from "../controllers/room.controller.ts";

const roomRouter = express.Router();

roomRouter.get("/rooms", roomController.getAll);
// roomRouter.get("/rooms/:id", roomController.getById);
roomRouter.post("/rooms", roomController.create);
roomRouter.patch("/rooms/:name", roomController.update);
roomRouter.delete("/rooms/:name", roomController.suppr);

export default roomRouter;
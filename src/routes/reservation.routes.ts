import express from "express";
import reservationController from "../controllers/reservation.controller.ts";

const reservationRouter = express.Router();

reservationRouter.get("/reservations", reservationController.getAll);
// reservationRouter.get("/reservations/:id", reservationController.getById);
reservationRouter.post("/reservations", reservationController.create);
reservationRouter.patch("/reservations/:id", reservationController.update);
reservationRouter.delete("/reservations/:id", reservationController.suppr);

export default reservationRouter;
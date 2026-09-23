import type { Request, NextFunction, Response } from "express";
import roomService from "../services/room.service.ts";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const room = await roomService.getById(Number(req.params.id));
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
};

const getAll = async (req: Request, res: Response) => {
    try {
        const rooms = await roomService.getAll();
        return res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).json();
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const room = { name: data.name, capacity: Number(data.capacity) };

        const newRoom = await roomService.create(room);
        res.status(201).json(newRoom);
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedRoom = await roomService.update(Number(req.params.id), req.body);
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
};

const suppr = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const room = await roomService.suppr(Number(req.params.id));
        res.status(204).json(room);
    } catch (error) {
        next(error);
    }
};

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};
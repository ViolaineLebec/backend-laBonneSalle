import type { Request, NextFunction, Response } from "express";
import roomService from "../services/room.service.ts";

// const getById = async (req, res, next) => {
//     try {
//         const room = await roomService.getById(req.params.id);
//         res.status(200).json(room);
//     } catch (error) {
//         next(error);
//     }
// };

const getAll = async (req, res, next) => {
    try {
        const rooms = await roomService.getAll();
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const newRoom = await roomService.create(req.body);
        res.status(201).json(newRoom);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updatedRoom = await roomService.update(req.params.name, req.body);
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
};

const suppr = async (req, res, next) => {
    try {
        const newRoom = await roomService.suppr(req.params.name);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export default {
    // getById, 
    getAll, 
    create,
    update,
    suppr
};
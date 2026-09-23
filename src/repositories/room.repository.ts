import { prisma } from "../../database/database.ts";
import { Prisma } from "../../generated/prisma/client.ts";
import type { createRoomDTO, roomDTO } from "../dto/room.dto.ts";

const getById = async (id: number) => {
    return await prisma.room.findUnique({
        where: { id }
    });
}

const getAll = async () => {
    return await prisma.room.findMany();
};

const create = async (data: { name: string, capacity: number }) => {
    return await prisma.room.create({ data });
};

const update = async (id: number, data: { name?: string, capacity?: number }): Promise<roomDTO> => {
    return await prisma.room.update({
        where: { id },
        data: { ...data }
    });
};

const suppr = async (id: number) => {
    return await prisma.room.delete({ where: { id } });
};

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};
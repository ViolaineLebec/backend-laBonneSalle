import { prisma } from "../../database/database.ts";
import { Prisma } from "../../generated/prisma/client.ts";
import type { createReservationDTO, reservationDTO } from "../dto/reservation.dto.ts";

const getAll = async () => {
    return await prisma.reservation.findMany();
};

const create = async (data: { name: string, capacity: number }) => {
    return await prisma.reservation.create({ data });
};

const update = async (id: number, data: { name?: string, capacity?: number }): Promise<reservationDTO> => {
    return await prisma.reservation.update({
        where: { id },
        data: { ...data }
    });
};

const suppr = async (id: number) => {
    return await prisma.reservation.delete({ where: { id } });
};

export default {
    getAll,
    create,
    update,
    suppr
};
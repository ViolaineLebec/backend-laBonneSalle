import { prisma } from "../../database/database.ts";
import { Prisma } from "../../generated/prisma/client.ts";

const getAll = async () => {
    return await prisma.room.findMany();
};

const create = async (data: { name: string, capacity: number }) => {
    return await prisma.room.create({data});
};

const update = async ({where, data}:{where: Prisma.RoomWhereUniqueInput, data: Prisma.RoomUpdateInput}) => {
    return await prisma.room.update({where, data});
};

const suppr = async ({where}: {where: Prisma.RoomWhereUniqueInput}) => {
    return await prisma.room.delete({where});
};

export default { 
    getAll, 
    create,
    update,
    suppr
 };
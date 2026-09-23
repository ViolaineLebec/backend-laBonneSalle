import roomRepository from "../repositories/room.repository.ts";

const getById = async (id: number) => {
    const room = await roomRepository.getById(id);
    if (!room) {
        throw new Error("Room not found");
    }
    return room;
};

const getAll = async () => {
    return await roomRepository.getAll();
};

const create = async (room: { name: string, capacity: number }) => {
    return await roomRepository.create(room);
}

const update = async (id: number, data: { name?: string, capacity: number }) => {
    return await roomRepository.update(id, data);
}

const suppr = async (id: number) => {
    return await roomRepository.suppr(id);
}

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};

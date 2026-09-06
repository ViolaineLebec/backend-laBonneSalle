import roomRepository from "../repositories/room.repository.ts";

// const getById = async (id: string) => {
//     const room = await roomRepository.getById(id);
//     if (!room) {
//         throw new Error("Room not found");
//     }
//     return room;
// };

const getAll = async () => {
    return await roomRepository.getAll();
};

const create = async (room: {name: string, capacity: number}) => {
   return await roomRepository.create(room);
}

const update = async (name: string, data: {name?:string, capacity?:number}) => {
    return await roomRepository.update({where:{name}, data});
}

const suppr = async (name: string) => {
    return await roomRepository.suppr({where:{name}});
}

export default {
    // getById,
    getAll,
    create,
    update,
    suppr
};

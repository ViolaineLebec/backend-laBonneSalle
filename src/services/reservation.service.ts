import reservationRepository from "../repositories/reservation.repository.ts";

// const getById = async (id: string) => {
//     const reservation = await reservationRepository.getById(id);
//     if (!reservation) {
//         throw new Error("Reservation not found");
//     }
//     return reservation;
// };

const getAll = async () => {
    return await reservationRepository.getAll();
};

const create = async (reservation: { name: string, capacity: number }) => {
    return await reservationRepository.create(reservation);
}

const update = async (id: number, data: { name?: string, capacity: number }) => {
    return await reservationRepository.update(id, data);
}

const suppr = async (id: number) => {
    return await reservationRepository.suppr(id);
}

export default {
    // getById,
    getAll,
    create,
    update,
    suppr
};

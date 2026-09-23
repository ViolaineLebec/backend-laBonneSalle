export interface createReservationDTO {
    name: string;
    capacity: number;
}

export interface reservationDTO { id: number, name: string | null, capacity: number | null }

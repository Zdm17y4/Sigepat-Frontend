import { IHabitacionResponse } from "./habitacion-response";
import { IHotelResponse } from "./hotel-response";

export interface IAlojamientoResponse {

    idAlojamiento: number;
    precio: number;
    cancelable: boolean;
    modificable: boolean;
    noches: number;
    hotel: IHotelResponse;
    habitacion: IHabitacionResponse;
}


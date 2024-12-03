import { IHotelResponse } from "./hotel-response";

export interface IHabitacionResponse {

    idHabitacion: number;
    tipoHabitacion: string;
    precioDia: number;
    hotel: IHotelResponse;
}

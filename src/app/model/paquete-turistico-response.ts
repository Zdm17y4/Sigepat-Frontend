import {IAlojamientoResponse} from "./alojamiento-response"
import {IVueloResponse} from "./vuelo-response"

export interface IPaqueteTuristicoResponse {

    idPaqueteTuristico: number;
    precioTotal: number;
    alojamiento: IAlojamientoResponse;
    vuelo: IVueloResponse;
}

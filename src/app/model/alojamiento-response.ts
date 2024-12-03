import { ICiudad } from "./ciudad";

export interface IAlojamientoResponse {

    idAlojamiento: number;
    precio: number;
    cancelable: boolean;
    modificable: boolean;
    noches: number;
    hotel: number;
    habitacion: number;
}


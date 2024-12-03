import {ICiudad} from "./ciudad"

export interface IHotelResponse {

    idHotel: number;
    nombre: string;
    direccion: string;
    clasificacion: number;
    habitIndDisponibles: number;
    habitDobDisponibles: number;
    ciudad: ICiudad;
    cancelable: boolean;
    modificable: boolean;

}


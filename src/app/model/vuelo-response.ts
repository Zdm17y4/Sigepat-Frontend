import {ICiudad} from "./ciudad"
import {IAeropuerto} from "./aeropuerto"
import {IAerolinea} from "./aerolinea"

export interface IVueloResponse {

    idVuelo: number;
    fechaHoraIda: string;
    fechaHoraRegreso: string;
    ciudadOrigen: ICiudad;
    aeropuertoIda: IAeropuerto;
    ciudadDestino: ICiudad;
    aeropuertoRegreso: IAeropuerto;
    aerolinea: IAerolinea;
}

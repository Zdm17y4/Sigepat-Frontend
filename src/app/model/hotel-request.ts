export interface IHotelRequest {

    idHotel: number;
    nombre: string;
    direccion: string;
    clasificacion: number;
    habitIndDisponibles: number;
    habitDobDisponibles: number;
    ciudad: number;
    cancelable: boolean;
    modificable: boolean;  
}
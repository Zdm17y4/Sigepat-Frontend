import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { IHabitacionResponse } from '../model/habitacion-response';
import { IHabitacionRequest } from '../model/habitacion-request';
import { IHotelRequest } from '../model/hotel-request';
import { IVueloResponse } from '../model/vuelo-response';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient) { }

  getVuelosByCiudadesAndFechas(
    ciudadOrigen: number,
    ciudadDestino: number,
    fechaIda: string,
    fechaRegreso: string) {

      const fechaIdaFormatted = new Date(fechaIda).toISOString().split('T')[0];
      const fechaRegresoFormatted  = new Date(fechaRegreso).toISOString().split('T')[0];

      return this.http.get<IVueloResponse[]>(`${BASE_URL}/vuelo/findByCiudadesFechas?ciudadOrigen=${ciudadOrigen}&ciudadDestino=${ciudadDestino}&fechaIda=${fechaIdaFormatted}&fechaRegreso=${fechaRegresoFormatted}`);
    }
}

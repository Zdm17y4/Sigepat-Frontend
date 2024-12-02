import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { IHabitacionResponse } from '../model/habitacion-response';
import { IHabitacionRequest } from '../model/habitacion-request';
import { IHotelRequest } from '../model/hotel-request';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  getHabitacionesByHotel(idHotel: number): Observable<IHabitacionResponse[]> {
    return this.http.get<IHabitacionResponse[]>(`${BASE_URL}/habitacion/findByHotel?idHotel=${idHotel}`);
  }
}

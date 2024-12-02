import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { IHabitacionResponse } from '../model/habitacion-response';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  getHabitacionesByHotel(idHotel: number): Observable<IHabitacionResponse[]> {
    const habitacionRequest = {"hotel": idHotel};
    return this.http.get<IHabitacionResponse[]>(`${BASE_URL}/habitacion/findByHotel`)
  }
}

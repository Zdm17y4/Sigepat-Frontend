import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IHotelResponse } from '../model/hotel-response';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHoteles(): Observable<IHotelResponse[]> {
    return this.http.get<IHotelResponse[]>(`${BASE_URL}/hotel`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlojamientoResponse } from './../model/alojamiento-response'
import { BASE_URL } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})
export class AlojamientoService {

  constructor(private http: HttpClient) { }

  getAlojamientos(): Observable<IAlojamientoResponse[]> {
    return this.http.get<IAlojamientoResponse[]>(`${BASE_URL}/alojamiento`);
  }

}

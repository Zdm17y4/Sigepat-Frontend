import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { IPaqueteTuristicoRequest } from '../model/paquete-turistico-request';
import { IPaqueteTuristicoResponse } from '../model/paquete-turistico-response';

@Injectable({
  providedIn: 'root'
})
export class PaqueteTuristicoService {

  constructor(private http: HttpClient) { }

  insertPaqueteTuristico(paqueteTuristicoRequest: IPaqueteTuristicoRequest): Observable<IPaqueteTuristicoResponse> {
    return this.http.post<IPaqueteTuristicoResponse>(`${BASE_URL}/paquete-turistico`, paqueteTuristicoRequest);
  }
}

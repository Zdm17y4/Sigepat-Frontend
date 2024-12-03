import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { ICiudad } from '../model/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

    // Método para obtener la lista de ciudades
    getCiudades(): Observable<ICiudad[]> {
      return this.http.get<ICiudad[]>(`${BASE_URL}/ciudad`);
    }
}

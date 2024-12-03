import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IVueloResponse } from '../../model/vuelo-response';
import { VueloService } from '../../service/vuelo.service';

@Component({
  selector: 'app-mostrar-vuelos',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ReactiveFormsModule],
  templateUrl: './mostrar-vuelos.component.html',
  styleUrl: './mostrar-vuelos.component.css'
})
export class MostrarVuelosComponent {

  title = 'Vuelos'
  page: number = 1;
  vuelosArray: IVueloResponse[] = [];

  origen: string | null = '';
  destino: string | null = '';
  fechaIda: string | null = '';
  fechaVuelta: string | null = '';
  habitaciones: string | null = '';
  pasajeros: string | null = '';

  ciudadOrigen: number = 0;
  ciudadDestino: number = 0;

  constructor(private vueloService: VueloService) { }

  ngOnInit(): void {

    this.loadDatos();

  }

  loadDatos(): void {
    // Recuperar los datos de sessionStorage
    this.origen = sessionStorage.getItem('origen');
    this.destino = sessionStorage.getItem('destino');
    this.fechaIda = sessionStorage.getItem('fechaIda');
    this.fechaVuelta = sessionStorage.getItem('fechaVuelta');
    this.habitaciones = sessionStorage.getItem('habitaciones');
    this.pasajeros = sessionStorage.getItem('pasajeros');

    // Mostrar los datos en consola para verificar
    console.log('Datos recuperados de sessionStorage:');
    console.log('Origen:', this.origen);
    console.log('Destino:', this.destino);
    console.log('Fecha Ida:', this.fechaIda);
    console.log('Fecha Vuelta:', this.fechaVuelta);
    console.log('Habitaciones:', this.habitaciones);
    console.log('Pasajeros:', this.pasajeros);

    const ciudadOrigen = Number(this.origen);
    const ciudadDestino = Number(this.destino);

    if ((ciudadOrigen && !isNaN(ciudadOrigen)) &&
       (ciudadDestino && !isNaN(ciudadDestino)) &&
       (this.fechaIda && this.fechaVuelta)) {
        this.getVuelos(ciudadOrigen, ciudadDestino, this.fechaIda, this.fechaVuelta);

    } else {
      console.log("Algun error en los datos para el vuelo")
    }
  }

  // Obtener habitaciones por hotel
  getVuelos(
    ciudadOrigen: number, 
    ciudadDestino: number,
    fechaIda: string,
    fechaRegreso: string): void {

      console.log('Datos de vuelo: ', ciudadOrigen, ciudadDestino, fechaIda, fechaRegreso);

    this.vueloService.getVuelosByCiudadesAndFechas(ciudadOrigen, ciudadDestino, fechaIda, fechaRegreso).subscribe((vuelos: IVueloResponse[]) => {
      this.vuelosArray = vuelos;
      console.log('Vuelos:', this.vuelosArray);
    });
  }

  elegirVuelo(): void {

  }

}

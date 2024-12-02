import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { IHotelResponse } from '../../model/hotel-response';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { IHotelRequest } from '../../model/hotel-request';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HabitacionService } from '../../service/habitacion.service';
import { IHabitacionResponse } from '../../model/habitacion-response';

@Component({
  selector: 'app-mostrar-habitaciones',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ReactiveFormsModule],
  templateUrl: './mostrar-habitaciones.component.html',
  styleUrl: './mostrar-habitaciones.component.css'
})
export class MostrarHabitacionesComponent {

  title = 'Habitaciones'
  page: number = 1;
  habitacionArray: IHabitacionResponse[] = [];
  hotelSeleccionado: IHotelResponse | null = null;

  origen: string | null = '';
  destino: string | null = '';
  fechaIda: string | null = '';
  fechaVuelta: string | null = '';
  habitaciones: string | null = '';
  pasajeros: string | null = '';



  constructor(private habitacionService: HabitacionService) {}

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

    // Recuperar el hotel seleccionado desde sessionStorage
    const hotelData = sessionStorage.getItem('hotelSeleccionado');
    if (hotelData) {
      this.hotelSeleccionado = JSON.parse(hotelData);
      console.log('Hotel seleccionado', this.hotelSeleccionado);

      const idHotel = this.hotelSeleccionado?.idHotel;

      if (idHotel && !isNaN(idHotel)) {
        this.getHabitacionesByHotel(idHotel);
      } else {
        console.error('El hotel no tiene un id valido', idHotel)
      }
    } else {
      console.error('No se encontró el hotel seleccionado en sessionStorage')
    }
  }

  // Obtener habitaciones por hotel
  getHabitacionesByHotel(idHotel: number): void {
    this.habitacionService.getHabitacionesByHotel(idHotel).subscribe((habitaciones: IHabitacionResponse[]) => {
      this.habitacionArray = habitaciones;
      console.log('Habitaciones: ', this.habitacionArray)
    });
  }

}

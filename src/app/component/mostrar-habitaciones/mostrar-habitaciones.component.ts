import { Component } from '@angular/core';
import { IHotelResponse } from '../../model/hotel-response';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitacionService } from '../../service/habitacion.service';
import { IHabitacionResponse } from '../../model/habitacion-response';
import { AlojamientoService } from '../../service/alojamiento.service';
import { IAlojamientoRequest } from '../../model/alojamiento-request';
import { IAlojamientoResponse } from '../../model/alojamiento-response';

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

  cantidadDias: number = 0;



  constructor(private habitacionService: HabitacionService, private alojamientoService: AlojamientoService) { }

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

    if (this.fechaIda && this.fechaVuelta) {
      this.cantidadDias = this.calcularDias(this.fechaIda, this.fechaVuelta);
      console.log('Cantidad de días:', this.cantidadDias);
    }

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


  elegirHabitacion(habitacion: IHabitacionResponse): void {

    sessionStorage.setItem('habitacionSeleccionada', JSON.stringify(habitacion));
    sessionStorage.setItem('hotelSeleccionado', JSON.stringify(this.hotelSeleccionado))

    console.log('Habitacion seleccionada', habitacion);
    console.log('Hotel seleccionado', this.hotelSeleccionado);
    console.log('Datos guardados en sessionStorage:', sessionStorage.getItem('habitacionSeleccionada'))
    console.log('Datos guardados en sessionStorage:', sessionStorage.getItem('hotelSeleccionado'))

    if (this.hotelSeleccionado) {
      var alojamientoRequest: IAlojamientoRequest = {
        idAlojamiento: 0,
        precio: 0,
        cancelable: false,
        modificable: false,
        noches: this.cantidadDias,
        hotel: this.hotelSeleccionado?.idHotel,
        habitacion: habitacion.idHabitacion
      }

      // Llamar al servicio para insertar el alojamiento
      this.alojamientoService.insertAlojamiento(alojamientoRequest).subscribe({
        next: (alojamientoReponse: IAlojamientoResponse) => {
          console.log('Alojamiento insertado exitosamente:', alojamientoReponse);
          sessionStorage.setItem('alojamientoRegistrado', JSON.stringify(alojamientoReponse))
        },
        error: (err) => {
          console.error('Error al insertar alojamiento:', err);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      });

    }

    window.location.href = '/mostrar-vuelos';
  }


  // Método para calcular la diferencia en días entre dos fechas
  calcularDias(fechaIda: string, fechaVuelta: string): number {
    const fechaIdaDate = new Date(fechaIda); // Convertir a objeto Date
    const fechaVueltaDate = new Date(fechaVuelta); // Convertir a objeto Date

    // Calcular la diferencia en milisegundos
    const diferencia = fechaVueltaDate.getTime() - fechaIdaDate.getTime();

    // Convertir la diferencia a días (1 día = 24 horas * 60 minutos * 60 segundos * 1000 milisegundos)
    const cantidadDias = diferencia / (1000 * 3600 * 24);

    return cantidadDias;
  }

}

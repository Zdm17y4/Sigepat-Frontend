import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { IHotelResponse } from '../../model/hotel-response';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { IHotelRequest } from '../../model/hotel-request';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-hoteles',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ReactiveFormsModule],
  templateUrl: './mostrar-hoteles.component.html',
  styleUrl: './mostrar-hoteles.component.css'
})
export class MostrarHotelesComponent {

  origen: string | null = '';
  destino: string | null = '';
  fechaIda: string | null = '';
  fechaVuelta: string | null = '';
  habitaciones: string | null = '';
  pasajeros: string | null = '';

  title = 'Hoteles'
  page: number = 1;
  hotelArray: IHotelResponse[] = [];
  ciudadBusqueda = new FormControl(''); // campo para la busqueda de la ciudad

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {

    this.loadDatos();
    this.ciudadBusqueda.setValue(this.destino);
    this.getHotelesPorCiudad();
  }

  loadDatos(): void {
    // Recuperar los datos de sessionStorage
    this.origen = sessionStorage.getItem('origen');
    this.destino = sessionStorage.getItem('destino');
    this.fechaIda = sessionStorage.getItem('fechaIda');
    this.fechaVuelta = sessionStorage.getItem('fechaVuelta');
    this.habitaciones = sessionStorage.getItem('habitaciones');
    this.pasajeros = sessionStorage.getItem('pasajeros');

    // Imprimir en consola para verificar
    console.log('Datos recuperados de sessionStorage:');
    console.log('Origen:', this.origen);
    console.log('Destino:', this.destino);
    console.log('Fecha Ida:', this.fechaIda);
    console.log('Fecha Vuelta:', this.fechaVuelta);
    console.log('Habitaciones:', this.habitaciones);
    console.log('Pasajeros:', this.pasajeros);

    if (this.destino) {
      this.ciudadBusqueda.setValue(this.destino);
    }
  }

  // getHoteles(): void {
  //   this.hotelService.getHoteles().subscribe((result: any) => {
  //     //.log('Result', result);
  //     this.hotelArray = result;
  //   })
  // }

  // Obtener hoteles por ciudad cuando cambia el campo de búsqueda
  getHotelesPorCiudad(): void {
    const idCiudad = Number(this.ciudadBusqueda.value);
    if (idCiudad) {
      this.hotelService.getHotelesByCiudad(idCiudad).subscribe((result: any) => {
        this.hotelArray = result;
      });
    } else {
      // Si el campo está vacío, no hacer nada y mostrar un mensaje o dejar la lista vacía
      this.hotelArray = []; // Limpiar la lista de hoteles
    }
  }

  // Método para elegir un hotel y guardarlo en sessionStorage
  elegirHotel(hotel: IHotelResponse): void {
    // Guardar los datos del hotel seleccionado en sessionStorage
    sessionStorage.setItem('hotelSeleccionado', JSON.stringify(hotel));

    // Mostrar mensaje en consola para verificar
    console.log('Hotel seleccionado:', hotel);
    console.log('Datos guardados en sessionStorage:', sessionStorage.getItem('hotelSeleccionado'));
    window.location.href = '/mostrar-habitaciones';
  }

}


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
  imports: [],
  templateUrl: './mostrar-habitaciones.component.html',
  styleUrl: './mostrar-habitaciones.component.css'
})
export class MostrarHabitacionesComponent {

  title = 'Hoteles'
  page: number = 1;
  habitacionArray: IHabitacionResponse[] = [];
  hotelBusqueda = new FormControl('');

  constructor(private habitacionService: HabitacionService) {}

  ngOnInit(): void {

    this.loadDatos();

  }

  loadDatos(): void {

  }

  getHabitacionesByHotel(): void {
    const idHotel = Number(this.hotelBusqueda.value);
    if (idHotel) {
      this.habitacionService.getHabitacionesByHotel(idHotel).subscribe((result: any) => {
        this.habitacionArray = result
      });
    } else {
      this.habitacionArray = []
    }
  }

}

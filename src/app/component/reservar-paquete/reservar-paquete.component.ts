import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IVueloResponse } from '../../model/vuelo-response';
import { IHotelResponse } from '../../model/hotel-response';
import { VueloService } from '../../service/vuelo.service';
import { IHabitacionResponse } from '../../model/habitacion-response';
import { IAlojamientoResponse } from '../../model/alojamiento-response';

@Component({
  selector: 'app-reservar-paquete',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ReactiveFormsModule],
  templateUrl: './reservar-paquete.component.html',
  styleUrl: './reservar-paquete.component.css'
})
export class ReservarPaqueteComponent {

  title = "Reservar Paquete"
  hotelSeleccionado: IHotelResponse | null = null;
  habitacionSeleccionada: IHabitacionResponse | null = null
  alojamientoRegistrado: IAlojamientoResponse | null = null;
  vueloSeleccionado: IVueloResponse | null = null;

  loadDatos(): void {

  }

  reservarPaquete(): void {
    
  }

}

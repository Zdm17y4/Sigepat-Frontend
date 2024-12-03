import { Component } from '@angular/core';
import { AlojamientoService } from '../../service/alojamiento.service';
import { IAlojamientoResponse } from '../../model/alojamiento-response';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-reservar-alojamiento',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './reservar-alojamiento.component.html',
  styleUrl: './reservar-alojamiento.component.css'
})
export class ReservarAlojamientoComponent {

  title = 'Reservar Alojamiento';
  page: number = 1;
  alojamientosArray: IAlojamientoResponse[] = [];

  constructor(private alojamientoService: AlojamientoService) {}

  ngOnInit(): void {
    this.getAlojamientos();
  }

  getAlojamientos(): void {
    this.alojamientoService.getAlojamientos().subscribe((result:any) => {
      //console.log('Result ', result);
      this.alojamientosArray = result;
      //console.log(this.alojamientosArray);
    })
  }
}

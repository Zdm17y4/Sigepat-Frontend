import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { IHotelResponse } from '../../model/hotel-response';
import { CommonModule} from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-mostrar-hoteles',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './mostrar-hoteles.component.html',
  styleUrl: './mostrar-hoteles.component.css'
})
  export class MostrarHotelesComponent {

    title = 'Hoteles'
    page: number = 1;
    hotelArray: IHotelResponse[] = [];

    constructor(private hotelService: HotelService) { }

    ngOnInit(): void {
      this.getHoteles();
    }

    getHoteles(): void {
      this.hotelService.getHoteles().subscribe((result: any) => {
        //.log('Result', result);
        this.hotelArray = result;
      })
    }
  }


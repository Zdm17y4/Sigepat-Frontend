import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IVueloResponse } from '../../model/vuelo-response';
import { IHotelResponse } from '../../model/hotel-response';
import { VueloService } from '../../service/vuelo.service';
import { IHabitacionResponse } from '../../model/habitacion-response';
import { IAlojamientoResponse } from '../../model/alojamiento-response';
import { PaqueteTuristicoService } from '../../service/paquete-turistico.service';
import { IPaqueteTuristicoRequest } from '../../model/paquete-turistico-request';
import { IPaqueteTuristicoResponse } from '../../model/paquete-turistico-response';
import bootstrap from '../../../main.server';

@Component({
  selector: 'app-reservar-paquete',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ReactiveFormsModule],
  templateUrl: './reservar-paquete.component.html',
  styleUrl: './reservar-paquete.component.css'
})
export class ReservarPaqueteComponent {

  origen: string | null = '';
  destino: string | null = '';
  fechaIda: string | null = '';
  fechaVuelta: string | null = '';
  habitaciones: string | null = '';
  pasajeros: string | null = '';

  title = "Reservar Paquete"
  hotelSeleccionado: IHotelResponse | null = null;
  habitacionSeleccionada: IHabitacionResponse | null = null
  alojamientoRegistrado: IAlojamientoResponse | null = null;
  vueloSeleccionado: IVueloResponse | null = null;
  idHotel: number | null = 0;
  paqueteTuristicoRegistrado: IPaqueteTuristicoResponse | null = null;

  // Diccionario de imágenes por ciudad
  ciudadImagenes: { [key: string]: string } = {
    "Lima": "https://viajes.nationalgeographic.com.es/medio/2024/01/09/istock_3fcf1ef0_1387126975_240109173344_1280x640.jpg",
    "Cuzco": "https://www.aatccusco.com/images/slider/vinicunca-mochilero.jpg",
    "Arequipa": "https://enviajes.cl/wp-content/uploads/2022/04/Peru-lugares-Arequipa-Enviajes.jpg",
    "Piura": "https://peruatravel.com/wp-content/uploads/2020/11/programas-por-ciudad-piura-tumbes-peruatravel-turismo-peru-a-travel-2.jpg",
    "Trujillo": "https://www.regionlalibertad.gob.pe/noticias/images/stories/BOLETIN/06-de-agosto---la-libertad-lidera-turismp.jpeg",
    "Cajamarca": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6c/c8/46/vista-de-la-plaza-mayor.jpg?w=500&h=-1&s=1",
    "Jauja": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQyOB7pB-rWkXDcPGSoRbjjE9l95uvdYEfZgncTdui9CMSNSUTSJxpoUaNxq0RU7xjQGDyg2DjRnFkyQ02pEMCSuxLtS4oOM014QTPHIQ",
    "Pucallpa": "https://www.turiweb.pe/wp-content/uploads/2024/04/pucallpa1-050424.jpg"
  };

  hotelesImagenes: { [key: number]: string } = {
    1: "https://www.fiesta-tours-peru.com/img/hotels/lima/miraflores/big/estelar-miraflores.jpg",
    2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447548666.jpg?k=e813cd8c8742748dfc9c65aefa99db5eaafc7ac45be0af27a571e4c43f97920e&o=&hp=1",
    3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/589866028.jpg?k=aecdef92739e0abe544237bb76820f58d43f7c4d132f171299a9ef722f5a3db0&o=&hp=1",
    4: "https://cache.marriott.com/content/dam/marriott-digital/jw/cala/hws/c/cuzmc/en_us/photo/unlimited/assets/cuzmc-exterior-0110.jpg",
    5: "https://cdn.adventure-life.com/70/83/2/h76n3yjf/1300x820.webp",
    6: "https://libertador.arequipahotels24.com/data/Images/OriginalPhoto/12788/1278813/1278813694/image-arequipa-libertador-hotel-98.JPEG",
    7: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/29186184.jpg?k=a5555c36ebcdd9480c3ab22e9049e1fc669c417a76484af5ac867d4233b4f1d4&o=&hp=1",
    8: "https://gran-palma.hotelesenpiura.com/data/Images/OriginalPhoto/7050/705099/705099109/image-piura-hotel-gran-palma-70.JPEG",
    9: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/cb/06/b8bbb6df35c1d61a5d81db864584c05b82845005ab01af53c008e3434974.jpeg",
    10: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZdLEOQBYugE4b7FtpkVpRU0lmwiG4GLD0iGb_Eu1Tf5p3ektkzbUtwmBl-d8UFuEtMhlQKdVn0x3eldAdmYZktl-jlsjvcR9PmEEHFVf25tfs9nwCCOcpWscO1HsXcxnbqfLCgCVdjDMR/s1600/2.jpg",
    11: "https://images.trvl-media.com/lodging/6000000/5110000/5103800/5103770/6f9677c7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    12: "https://images.trvl-media.com/lodging/32000000/31120000/31118700/31118672/599c3f61.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    13: "https://hotel-casa-jauja.hotelmix.es/data/Photos/OriginalPhoto/7272/727245/727245808/Hotel-Casa-Jauja-Exterior.JPEG",
    14: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/490385034.jpg?k=2ee31b0c043360c4b34be8fa202d30e7ef1633cc7838afdbba3a5107731a73b3&o=&hp=1",
    15: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/af/e0/537ce8fbe780509a2c3510bb245c60e3daac5fb1f6bc02be74b5fd8eda64.jpeg",
    16: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66718834.jpg?k=271fe69703aaab3b437032a155e5fbe6865c64fc6417ceb4050c0100aa2adf75&o=&hp=1",
    17: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a9/1f/26/facade.jpg?w=600&h=-1&s=1",
  };

  totalPrecioPaquete: number = 0;

  constructor(private paqueteService: PaqueteTuristicoService) { }

  ngOnInit(): void {
    this.loadDatos();
  }

  loadDatos(): void {

    this.origen = sessionStorage.getItem('origen');
    this.destino = sessionStorage.getItem('destino');
    this.fechaIda = sessionStorage.getItem('fechaIda');
    this.fechaVuelta = sessionStorage.getItem('fechaVuelta');

    const alojamientoData = sessionStorage.getItem('alojamientoRegistrado');
    if (alojamientoData) {
      try {
        this.alojamientoRegistrado = JSON.parse(alojamientoData);
        console.log('Alojamiento registrado', this.alojamientoRegistrado);
        console.log('Hotel', this.alojamientoRegistrado?.hotel)
        console.log('Habitacion', this.alojamientoRegistrado?.habitacion);
        if (this.alojamientoRegistrado) {
          this.idHotel = this.alojamientoRegistrado.hotel.idHotel;
          this.getImagenHotel(this.idHotel);
          console.log("idHotel obtenido desde alojamiento", this.idHotel);
        }

      } catch (error) {
        console.error('Error al parsear el alojamiento:', error);
      }
    } else {
      console.log('No se obtuvo el alojamiento');
    }

    const vueloData = sessionStorage.getItem('vueloSeleccionado');
    if (vueloData) {
      try {
        this.vueloSeleccionado = JSON.parse(vueloData);
        if (this.vueloSeleccionado) {
          this.destino = this.vueloSeleccionado.ciudadDestino.nombre;
          this.getImagenCiudad(this.destino);
          console.log("Ciudad destino obtenida desde vuelo", this.destino);
        }
        console.log('Vuelo seleccionado', this.vueloSeleccionado);
      } catch (error) {
        console.error('Error al parsear el vuelo:', error);
      }
    } else {
      console.log('No se obtuvo el vuelo');
    }

    // Mostrar los datos en consola para verificar
    console.log('Datos recuperados de sessionStorage:');
    console.log('Origen:', this.origen);
    console.log('Destino:', this.destino);
    console.log('Fecha Ida:', this.fechaIda);
    console.log('Fecha Vuelta:', this.fechaVuelta);
 
    if (this.alojamientoRegistrado && this.vueloSeleccionado) {
      this.totalPrecioPaquete = this.alojamientoRegistrado!!.precio + this.vueloSeleccionado!!.precio;
    }

  }

  reservarPaquete(): void {

    if (this.alojamientoRegistrado && this.vueloSeleccionado) {

      var paqueteTuristicoRequest: IPaqueteTuristicoRequest = {
        idPaqueteTuristico: 0,
        precioTotal: 0,
        alojamiento: this.alojamientoRegistrado.idAlojamiento,
        vuelo: this.vueloSeleccionado.idVuelo
      }

      this.paqueteService.insertPaqueteTuristico(paqueteTuristicoRequest).subscribe({
        next: (paqueteTuristicoResponse: IPaqueteTuristicoResponse) => {
          console.log('Paquete Turistico insertado exitosamente: ', paqueteTuristicoResponse);
          this.paqueteTuristicoRegistrado = paqueteTuristicoResponse;
          alert("Paquete registrado exitosamente");

          window.location.href = '/home';
        },
        error: (err) => {
          console.error('Error al insertar paquete turistico:', err)
          alert('Hubo un error al realizar la reserva. Por favor, intenta nuevamente.');

        }
      })
    }
  }

  getImagenCiudad(ciudadNombre: string): string {
    return this.ciudadImagenes[ciudadNombre];  // URL por defecto si no se encuentra la ciudad
  }

  getImagenHotel(hotelId: number): string {
    return this.hotelesImagenes[hotelId];  // URL por defecto si no se encuentra la ciudad
  }

}

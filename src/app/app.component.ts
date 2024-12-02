import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
//import { ReservarAlojamientoComponent } from './component/reservar-alojamiento/reservar-alojamiento.component';
import { MostrarHotelesComponent } from "./component/mostrar-hoteles/mostrar-hoteles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MostrarHotelesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PERU TOURS ';
}

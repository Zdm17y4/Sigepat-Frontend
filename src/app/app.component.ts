import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
<<<<<<< HEAD
//import { ReservarAlojamientoComponent } from './component/reservar-alojamiento/reservar-alojamiento.component';
import { MostrarHotelesComponent } from "./component/mostrar-hoteles/mostrar-hoteles.component";
=======
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
<<<<<<< HEAD
  title = 'PERU TOURS ';
=======
  title = '242CC341AAngularSigconFrontend';
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
}

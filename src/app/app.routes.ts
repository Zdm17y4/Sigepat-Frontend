import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VuelosComponent } from './component/vuelos/vuelos.component';
import { PaquetesComponent } from './component/paquetes/paquetes.component';
import { ReservasComponent } from './component/reservas/reservas.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { MostrarHotelesComponent } from './component/mostrar-hoteles/mostrar-hoteles.component';
import { MostrarHabitacionesComponent } from './component/mostrar-habitaciones/mostrar-habitaciones.component';
import { MostrarVuelosComponent } from './component/mostrar-vuelos/mostrar-vuelos.component';
import { ReservarPaqueteComponent } from './component/reservar-paquete/reservar-paquete.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: "mostrar-hoteles", component: MostrarHotelesComponent},
  { path: 'mostrar-habitaciones', component: MostrarHabitacionesComponent },
  { path: 'mostrar-vuelos', component: MostrarVuelosComponent},
  { path: 'reservar-paquete', component: ReservarPaqueteComponent}

];
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  onBuscar(): void {
    // Redirigir a la página de mostrar-hoteles
    window.location.href = '/paquetes';
  }
}

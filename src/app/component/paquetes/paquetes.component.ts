import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { CiudadService } from '../../service/ciudad.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ICiudad } from '../../model/ciudad';
=======
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
<<<<<<< HEAD
  standalone: true,  // Esto hace que el componente sea independiente
  imports: [ReactiveFormsModule, CommonModule],  // Añadir ReactiveFormsModule aquí
=======
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
  styleUrls: ['./paquetes.component.css'],
})
export class PaquetesComponent implements OnInit {
  paquetesForm: FormGroup;
<<<<<<< HEAD
  ciudades: ICiudad[] = []
  errorMessage: string = ''

  constructor(private formBuilder: FormBuilder, private ciudadService: CiudadService) {

=======

  constructor(private formBuilder: FormBuilder) {
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
    this.paquetesForm = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaIda: ['', Validators.required],
      fechaVuelta: [''],
      habitaciones: [1, [Validators.required, Validators.min(1)]],
      pasajeros: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
<<<<<<< HEAD

    // Cargar las ciudades al iniciar el componente
    this.loadCiudades();
  }

  loadCiudades(): void {
    this.ciudadService.getCiudades().subscribe({
      next: (ciudades) => {
        console.log('Ciudades cargadas: ', ciudades);
        this.ciudades = ciudades;  // Asigna las ciudades obtenidas al array "ciudades"
      },
      error: (err) => {
        console.error('Error al cargar las ciudades: ', err);
        this.errorMessage = 'Error al cargar las ciudades';  // Manejo de errores
      },
    });
  }

  onBuscar(): void {
    if (this.paquetesForm.valid) {
      // Guardar los datos en sessionStorage para transportarlos a la siguiente página
      sessionStorage.setItem('origen', this.paquetesForm.value.origen);
      sessionStorage.setItem('destino', this.paquetesForm.value.destino);
      sessionStorage.setItem('fechaIda', this.paquetesForm.value.fechaIda);
      sessionStorage.setItem('fechaVuelta', this.paquetesForm.value.fechaVuelta);
      sessionStorage.setItem('habitaciones', String(this.paquetesForm.value.habitaciones));
      sessionStorage.setItem('pasajeros', String(this.paquetesForm.value.pasajeros));

      // Verificar que los datos se guardaron correctamente
      console.log('Datos guardados en sessionStorage:');
      console.log('Origen:', sessionStorage.getItem('origen'));
      console.log('Destino:', sessionStorage.getItem('destino'));
      console.log('Fecha Ida:', sessionStorage.getItem('fechaIda'));
      console.log('Fecha Vuelta:', sessionStorage.getItem('fechaVuelta'));
      console.log('Habitaciones:', sessionStorage.getItem('habitaciones'));
      console.log('Pasajeros:', sessionStorage.getItem('pasajeros'));

      // Redirigir a la página de mostrar-hoteles
      window.location.href = '/mostrar-hoteles';
    }
=======
    // Lógica adicional al inicializar
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
  }
}

import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  filtro: string = '';
  alumnos: Alumno[] =[
    {nombre: 'Maru', edad: '17', curso: 'Diseño UX', profesor: 'Paolo'},
    {nombre: 'Mayra', edad: '20', curso: 'Ciberseguridad', profesor: 'Luciano'},
    {nombre: 'Maicol', edad: '19', curso: 'Python', profesor: 'Rocio'},
    {nombre: 'Moises', edad: '18', curso: 'Desarrollo de Videojuegos', profesor: 'Martin'},
    {nombre: 'Lu', edad: '19', curso: 'Cloud Computing', profesor: 'Alex'},
    {nombre: 'Melanie', edad: '22', curso: 'React', profesor: 'Alexandra'},
  ];
}

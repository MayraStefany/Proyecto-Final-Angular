import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  filtro: string = '';
  alumnos: Alumno[] =[
    {nombre: 'Maru', edad: '17', curso: 'Diseño UX', matriculado:'08/02/2023'},
    {nombre: 'Mayra', edad: '20', curso: 'Ciberseguridad', matriculado:'01/02/2023'},
    {nombre: 'Maicol', edad: '19', curso: 'Python', matriculado:'01/02/2023'},
    {nombre: 'Moises', edad: '18', curso: 'Desarrollo de Videojuegos', matriculado:'04/02/2023'},
    {nombre: 'Lu', edad: '19', curso: 'Cloud Computing', matriculado:'04/02/2023'},
    {nombre: 'Melanie', edad: '22', curso: 'React', matriculado:'06/02/2023'},
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
}

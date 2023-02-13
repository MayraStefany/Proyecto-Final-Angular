import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  filtro: string = '';
  alumnos: Alumno[] =[
    {
      nombre: 'Maru', 
      edad: '17', 
      curso: 'Diseño UX', 
      profesor: {
        nombre:'Paolo', 
        correo:'paoloprofe@gmail.com', 
        telefono: '54 9 11 7889-0770',
        fechaIngreso: new Date(2022,7,10)
      },
      fechaInicioCurso: new Date(2023,3,5,20,30,0)
    },
    {
      nombre: 'Mayra',
      edad: '20',
      curso: 'Ciberseguridad', 
      profesor: {
        nombre:'Luciano', 
        correo:'lucianoprofe@gmail.com', 
        telefono: '54 9 11 1223-3432',
        fechaIngreso: new Date(2022,6,10)
      },
      fechaInicioCurso: new Date(2023,3,4,20,30,0)
    },
    {
      nombre: 'Maicol', 
      edad: '19', 
      curso: 'Python', 
      profesor: {
        nombre:'Rocio', 
        correo:'rocioprofe@gmail.com',
        telefono: '54 9 11 4532-7670', 
        fechaIngreso: new Date(2022,7,18)
      },
      fechaInicioCurso: new Date(2023,3,10,20,30,0)
    },
    {
      nombre: 'Moises', 
      edad: '18', 
      curso: 'Desarrollo de Videojuegos', 
      profesor: {
        nombre:'Martin', 
        correo:'martinprofe@gmail.com',
        telefono: '54 9 11 3323-0909', 
        fechaIngreso: new Date(2022,8,12)
      },
      fechaInicioCurso: new Date(2023,2,18,20,30,0)
    },
    {
      nombre: 'Lu', 
      edad: '19', 
      curso: 'Cloud Computing', 
      profesor: {
        nombre:'Alex', 
        correo:'alexprofe@gmail.com', 
        telefono: '54 9 11 4343-4545',
        fechaIngreso: new Date(2022,2,18)
      },
      fechaInicioCurso: new Date(2023,3,5,20,30,0)
    },
    {
      nombre: 'Melanie', 
      edad: '22', 
      curso: 'React', 
      profesor: {
        nombre:'Alexandra', 
        correo:'alexandraprofe@gmail.com', 
        telefono: '54 9 11 7703-2020',
        fechaIngreso: new Date(2022,6,20)
      },
      fechaInicioCurso: new Date(2023,2,28,20,30,0)
    },
  ];

  constructor(
    private dialog: MatDialog
  ){

  }

  editarmodal(alumno: Alumno){
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: alumno
    });
  }
}

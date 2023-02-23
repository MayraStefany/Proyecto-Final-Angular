import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos: Alumno[] =[
    {
      id:1,
      nombre: 'Mayra',
      apellido: 'Torres',
      edad: '20 - prueba',
      curso: {
        nombre:'Ciberseguridad', 
        comision: '2321'
      },
      profesor: {
        nombre:'Luciano', 
        correo:'lucianoprofe@gmail.com', 
        telefono: '54 9 11 1223-3432',
        fechaIngreso: new Date(2022,6,10)
      },
      fechaInicioCurso: new Date(2023,3,4,20,30,0)
    },
    {
      id: 2,
      nombre: 'Moises', 
      apellido: 'Ortega',
      edad: '18 - prueba', 
      curso: {
        nombre:'Desarrollo de Videojuegos',  
        comision: '2321'
      },
      profesor: {
        nombre:'Martin', 
        correo:'martinprofe@gmail.com',
        telefono: '54 9 11 3323-0909', 
        fechaIngreso: new Date(2022,8,12)
      },
      fechaInicioCurso: new Date(2023,2,18,20,30,0)
    },
    {
      id: 3,
      nombre: 'Melanie', 
      apellido: 'Munares',
      edad: '22 - prueba', 
      curso: {
        nombre: 'React',  
        comision: '2321'
      },
      profesor: {
        nombre:'Alexandra', 
        correo:'alexandraprofe@gmail.com', 
        telefono: '54 9 11 7703-2020',
        fechaIngreso: new Date(2022,6,20)
      },
      fechaInicioCurso: new Date(2023,2,28,20,30,0)
    },
  ];

  constructor() { }

  obtenerAlumnos() : Array<Alumno>{
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    console.log('Se agrego', this.alumnos);
  }
}

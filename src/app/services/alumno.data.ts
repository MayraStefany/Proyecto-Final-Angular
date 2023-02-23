import { Alumno } from "../models/alumno";


export const alumnos = {
    obtenerAlumnos: () =>{
        return [
            {
              id:1,
              nombre: 'Mayra',
              apellido: 'Torres',
              edad: '20 - utilizando UseValue',
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
              edad: '18 - utilizando UseValue', 
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
              edad: '22 - utilizando UseValue', 
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
    },
    agregarAlumno:(alumno: Alumno) => {
        console.log('Agregando curso desde alumno.data.ts');
    }
}
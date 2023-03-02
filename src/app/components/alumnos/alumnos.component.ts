import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  filtro: string = '';
  alumnos: Alumno[] =[
    {
      id:1,
      nombre: 'Maru', 
      apellido: 'Lezama',
      edad: '17', 
      curso: {
        nombre:'Diseño UX',
        comision: '2321'
      },
      profesor: {
        nombre:'Paolo', 
        correo:'paoloprofe@gmail.com', 
        telefono: '54 9 11 7889-0770',
        fechaIngreso: new Date(2022,7,10)
      },
      fechaInicioCurso: new Date(2023,3,5,20,30,0)
    },
    {
      id:2,
      nombre: 'Mayra',
      apellido: 'Torres',
      edad: '20',
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
      id:3,
      nombre: 'Maicol', 
      apellido: 'Rodriguez',
      edad: '19', 
      curso: {
        nombre:'Python', 
        comision: '2321'
      },
      profesor: {
        nombre:'Rocio', 
        correo:'rocioprofe@gmail.com',
        telefono: '54 9 11 4532-7670', 
        fechaIngreso: new Date(2022,7,18)
      },
      fechaInicioCurso: new Date(2023,3,10,20,30,0)
    },
    {
      id: 4,
      nombre: 'Moises', 
      apellido: 'Ortega',
      edad: '18', 
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
      id: 5,
      nombre: 'Lu', 
      apellido: 'Pardo',
      edad: '19', 
      curso: {
        nombre:'Cloud Computing', 
        comision: '2321'
      },
      profesor: {
        nombre:'Alex', 
        correo:'alexprofe@gmail.com', 
        telefono: '54 9 11 4343-4545',
        fechaIngreso: new Date(2022,2,18)
      },
      fechaInicioCurso: new Date(2023,3,5,20,30,0)
    },
    {
      id: 6,
      nombre: 'Melanie', 
      apellido: 'Munares',
      edad: '22', 
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

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas: string[] = ['id','nombrecompleto', 'edad', 'curso', 'profesor', 'fecha a cursar','acciones'];


  constructor(
    private dialog: MatDialog
  ){

  }

 /* editarmodal(alumno: Alumno){
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: alumno
    });
  }*/

  private updateAlumno(updatedAlumno: Alumno) {
    const updatedDatasource = this.dataSource.data.map( s => s.id == updatedAlumno.id
        ? {...s,
        nombre: updatedAlumno.nombre,
        apellido: updatedAlumno.apellido,
        edad: updatedAlumno.edad,
        curso: updatedAlumno.curso,
        profesor: updatedAlumno.profesor,
        }
        : s
      );
      alert(updatedAlumno.curso.nombre);
    this.dataSource.data = updatedDatasource;
  }

  public editarAlumno(selectedAlumno: Alumno): void {
    console.log(selectedAlumno);
    if(selectedAlumno){
      let matDialog = this.dialog.open(EditarAlumnoDialogComponent, {
        width: '38rem',
        height: '35rem',
        data: selectedAlumno    /*selectedAlumno / alumno */
      })

      matDialog.afterClosed().subscribe(resultado => {

        if(resultado){
          let updatedAlumno: Alumno = {
            id: selectedAlumno.id,
            nombre: resultado.nombre,
            apellido: resultado.apellido,
            edad: resultado.edad,
            curso: {
              nombre: resultado.curso.nombre,
              comision: selectedAlumno.curso.comision,
            },
            profesor: {
              nombre:resultado.profesor.nombre, 
              correo:selectedAlumno.profesor.correo, 
              telefono: selectedAlumno.profesor.telefono,
              fechaIngreso: selectedAlumno.profesor.fechaIngreso,
            },
            fechaInicioCurso: selectedAlumno.fechaInicioCurso
          }
          this.updateAlumno(updatedAlumno);
        }
      });
    }
    
  }

  public eliminarAlumno(selectedAlumno: Alumno): void {
    const updatedDatasource = this.dataSource.data.filter(s => s.id !== selectedAlumno.id);
    this.dataSource.data = updatedDatasource;
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
}

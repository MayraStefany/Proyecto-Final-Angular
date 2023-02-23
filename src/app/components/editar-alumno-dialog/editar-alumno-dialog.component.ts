import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-editar-alumno-dialog',
  templateUrl: './editar-alumno-dialog.component.html',
  styleUrls: ['./editar-alumno-dialog.component.css']
})
export class EditarAlumnoDialogComponent implements OnInit{
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno                /*No olvidar que "data" tiene que ser PUBLIC */
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      edad: new FormControl(data.edad),
      curso: new FormControl(data.curso.nombre),
      profesor: new FormControl(data.profesor.nombre)
    })
  }                                                           /*"Alumno" para definir estructura o puede ser "any"*/

  ngOnInit(): void {
  }
  
  //Funciones dentro del Form

  //Validación
  public editAlumnoFormGroup = new FormGroup({
    nombre: new FormControl(this.data.nombre, [Validators.required, Validators.minLength(10)]),
    edad: new FormControl(this.data.edad, [Validators.required, Validators.minLength(3)]),
    curso: new FormControl(this.data.curso.nombre, [Validators.required, Validators.minLength(16)]),
    profesor: new FormControl(this.data.profesor.nombre, [Validators.required, Validators.minLength(10)])
  });

  public guardar(): void{
    this.dialogRef.close(this.editAlumnoFormGroup.value);
  }

  public cancelar(): void{
    this.dialogRef.close(null);
  }
  
}

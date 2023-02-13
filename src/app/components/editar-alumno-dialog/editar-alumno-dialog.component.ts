import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-editar-alumno-dialog',
  templateUrl: './editar-alumno-dialog.component.html',
  styleUrls: ['./editar-alumno-dialog.component.css']
})
export class EditarAlumnoDialogComponent {
  formulario: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno                /*No olvidar que "data" tiene que ser PUBLIC */
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre),
      edad: new FormControl(data.edad),
      curso: new FormControl(data.curso),
      profesor: new FormControl(data.profesor)
    })
  }                                                           /*"Alumno" para definir estructura o puede ser "any"*/
}

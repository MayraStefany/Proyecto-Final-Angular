import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'filtroAlumnos'
})
export class FiltroAlumnosPipe implements PipeTransform {

  transform(alumnos: Alumno[], filtro: string): Alumno[] {
    console.log(filtro)

    return alumnos.filter((a) =>{
      return a.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    });
  }

}

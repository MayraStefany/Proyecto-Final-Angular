import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombresYApellidos'
})
export class NombresYApellidosPipe implements PipeTransform {

  transform(apellido:string, nombre: string): string {
    let formato_nombre: string;

    formato_nombre = apellido + ', '+ nombre;
    
    return formato_nombre;
  }

}

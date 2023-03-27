import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha: Date): unknown {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} | Hora: ${fecha.getHours()}:${fecha.getMinutes()}`  /* date:'dd/MM/YYYY  | HH:mm' */

    return resultado;
  }

}

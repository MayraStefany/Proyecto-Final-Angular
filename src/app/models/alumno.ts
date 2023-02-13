import { Profesor } from "./profesor";

export interface Alumno{
    id: number;
    nombre: String;
    apellido: String;
    edad: String;
    curso: String;
    profesor: Profesor;
    fechaInicioCurso: Date;
}
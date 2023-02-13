import { Profesor } from "./profesor";

export interface Alumno{
    nombre: String;
    edad: String;
    curso: String;
    profesor: Profesor;
    fechaInicioCurso: Date;
}
import { Profesor } from "./profesor";
import { Curso } from "./curso";

export interface Alumno{
    id: number;
    nombre: String;
    apellido: String;
    edad: String;
    curso: Curso;
    profesor: Profesor;
    fechaInicioCurso: Date;
}
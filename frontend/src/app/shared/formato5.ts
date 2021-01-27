import { Curso } from "./curso";
import { Observaciones } from "./observaciones";

class Tipo {
    teoria: boolean;
    practica: boolean;
    laboratorio: boolean;
}

export class Formato5 { 
    cod_curso: number; 
    nom_curso: string;
    num_grupo: number;
    tipo: Tipo;
    nom_docente: string;
    email_docente: string;
    num_docente: number;
    del_curso: Curso;
    observaciones: Observaciones;
    fecha: string;
}
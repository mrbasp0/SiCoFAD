export class Alus {
    a_nombre : String
    a_codigo: String;
    a_correo: String
}

export class Formato_1 {
    
    _id: String;
    cod_curso: String;
    num_grupo: Number;
    nom_curso: String;    
    nom_docente: String;
    alumnos: [Alus];
    fecha: Date;
    
}
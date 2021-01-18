export class Curs {
    c_nombre : String
    c_codigo:String;
    c_grupo: Number;
    c_plan: String
}

export class Docente {

    _id: string;
    codigo: string;
    nombre: string;
    carga_academica: [Curs]
    /*
    constructor(_id = '', codigo = '', nombre = '', 
        [Curs]
    )
    {
        this._id = _id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.carga_academica = 
        [
            Curs
        ]
    };
    */
   

       
    
    
}

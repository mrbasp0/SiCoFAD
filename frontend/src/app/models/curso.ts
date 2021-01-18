export class Curso {
    
    constructor(_id = '', nombre = '', codigo = '', grupo = null, plan = '') {
        this._id = _id;
        this.nombre = nombre;
        this.codigo= codigo;
        this.grupo = grupo;
        this.plan = plan;
  
    }
    
    _id: string;
    nombre: string;
    codigo: string;
    grupo: number;
    plan: string;
    

}

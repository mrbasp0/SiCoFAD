const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlumnoSchema = new Schema({
    a_nombre: { type: String, required: true },
    a_codigo: { type: Number, required: true },
    a_correo: { type: String, required: true }
}, { _id : false });

const Form1Schema = new Schema({
    cod_curso: { type: String, required: true },
    num_grupo: { type: Number, required: true },
    nom_curso: { type: String, required: true },    
    nom_docente: { type: String, required: true },
    alumnos: { type: [AlumnoSchema], required: true },
    fecha: {type: Date, required: true }
});

module.exports = mongoose.model('Form1', Form1Schema);
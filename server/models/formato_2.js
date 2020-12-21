const mongoose = require('mongoose');
const { Schema } = mongoose;

const PSchema = new Schema({
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    email: { type: String, required: true },
    telefono: { type: Number, required: true },
    celular: { type: Number, required: true },
    direccion: { type: String, required: true },
});

const Form2Schema = new Schema({
    cod_curso: { type: Number, required: true },
    num_grupo: { type: Number, required: true },
    nom_curso: { type: String, required: true },    
    nom_docente: { type: String, required: true },
    delegado: { type: PSchema },
    subdelegado: { type: PSchema },
    fecha: {type: Date, required: true }
});

module.exports = mongoose.model('Form2', Form2Schema);
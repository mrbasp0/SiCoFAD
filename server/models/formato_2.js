const mongoose = require('mongoose');
const { Schema } = mongoose;

const PSchema = new Schema({
    p_nombre: { type: String, required: true },
    p_codigo: { type: Number, required: true },
    p_email: { type: String, required: true },
    p_telefono: { type: Number },
    p_celular: { type: Number, required: true },
    p_direccion: { type: String },
}, { _id : false });

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